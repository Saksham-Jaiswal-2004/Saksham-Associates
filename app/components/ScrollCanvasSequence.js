"use client"
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 240;
const DIGITS = 3;
const FILE_PREFIX = "/Hero Pics/ezgif-frame-";
const FILE_EXT = ".png";

// Helper to pad numbers (e.g., 1 -> "001")
const padZero = (num, size) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

// Frame index path helper
const getFramePath = (index) => {
  return `${FILE_PREFIX}${padZero(index, DIGITS)}${FILE_EXT}`;
};

export default function ScrollCanvasSequence() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Track loaded images: index -> HTMLImageElement
  const imagesRef = useRef({});
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Set up Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to frame index [1, 240]
  const frameIndexMotion = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  // Track resizing and paint the current frame
  const currentFrameRef = useRef(1);

  // Set up media query for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Helper to draw a specific frame on the canvas with "object-fit: cover" scaling
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find closest loaded image
    let img = imagesRef.current[frameIndex];
    if (!img) {
      // Find the closest loaded frame (search outward)
      let dist = 1;
      while (dist < TOTAL_FRAMES) {
        if (frameIndex - dist >= 1 && imagesRef.current[frameIndex - dist]) {
          img = imagesRef.current[frameIndex - dist];
          break;
        }
        if (frameIndex + dist <= TOTAL_FRAMES && imagesRef.current[frameIndex + dist]) {
          img = imagesRef.current[frameIndex + dist];
          break;
        }
        dist++;
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Use current physical dimensions of the canvas context buffer (no resizing!)
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, xOffset, yOffset;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image aspect ratio
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      xOffset = 0;
      yOffset = (canvasHeight - drawHeight) / 2;
    } else {
      // Canvas is taller than image aspect ratio
      drawWidth = canvasHeight * imgRatio;
      drawHeight = canvasHeight;
      xOffset = (canvasWidth - drawWidth) / 2;
      yOffset = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, xOffset, yOffset, drawWidth, drawHeight);
  };

  // Progressive Preloading Engine & Size Synchronizer
  useEffect(() => {
    let active = true;

    // Separate canvas resize logic to avoid layouts thrashing on scroll
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      drawFrame(currentFrameRef.current);
    };

    // Load Frame 1 first to display it immediately
    const firstImg = new Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => {
      if (!active) return;
      imagesRef.current[1] = firstImg;
      resizeCanvas();

      // Start preloading the core keyframes to establish initial scroll milestones
      const keyframes = [];
      const step = 12; // load every 12th frame (about 21 frames)
      for (let i = 1; i <= TOTAL_FRAMES; i += step) {
        if (i !== 1) keyframes.push(i);
      }
      if (!keyframes.includes(TOTAL_FRAMES)) keyframes.push(TOTAL_FRAMES);

      let keyframesLoaded = 0;

      const loadKeyframe = (index) => {
        const img = new Image();
        img.src = getFramePath(index);
        img.onload = () => {
          if (!active) return;
          imagesRef.current[index] = img;
          keyframesLoaded++;

          const progress = Math.min(Math.round((keyframesLoaded / keyframes.length) * 100), 100);
          setLoadingProgress(progress);

          // Once all core keyframes are loaded, we can clear the loading screen
          if (keyframesLoaded === keyframes.length) {
            setTimeout(() => {
              if (active) {
                setIsLoaderFinished(true);
                resizeCanvas();
              }
            }, 600);

            // Load the remaining background frames to fill the timeline
            loadRemainingFrames();
          }
        };
        img.onerror = () => {
          // Robust fallback if any image fails
          if (active) {
            keyframesLoaded++;
            if (keyframesLoaded === keyframes.length) {
              setIsLoaderFinished(true);
              loadRemainingFrames();
            }
          }
        };
      };

      keyframes.forEach(loadKeyframe);
    };

    // Load all remaining frames in batches to avoid network congestion
    const loadRemainingFrames = async () => {
      const remaining = [];
      for (let i = 2; i < TOTAL_FRAMES; i++) {
        if (!imagesRef.current[i]) {
          remaining.push(i);
        }
      }

      // Load sequentially in small chunks
      const chunkSize = 5;
      for (let i = 0; i < remaining.length; i += chunkSize) {
        if (!active) break;
        const chunk = remaining.slice(i, i + chunkSize);
        await Promise.all(
          chunk.map((frame) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = getFramePath(frame);
              img.onload = () => {
                if (active) {
                  imagesRef.current[frame] = img;
                  // If background frame is currently the active scroll frame, paint it!
                  if (frame === currentFrameRef.current) {
                    drawFrame(frame);
                  }
                }
                resolve();
              };
              img.onerror = () => resolve();
            });
          })
        );
      }
    };

    // Size listener
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", handleResize);

    // Initial resize call
    resizeCanvas();

    return () => {
      active = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update canvas on scroll progress change
  useMotionValueEvent(frameIndexMotion, "change", (latest) => {
    if (prefersReducedMotion) return;
    const rounded = Math.round(latest);
    if (rounded !== currentFrameRef.current) {
      currentFrameRef.current = rounded;
      drawFrame(rounded);
    }
  });

  // Fallback for prefersReducedMotion: automatically cycle or display static
  useEffect(() => {
    if (prefersReducedMotion) {
      // Just cycle every 4 seconds to show a slideshow
      let frame = 1;
      const interval = setInterval(() => {
        frame = frame === 1 ? 80 : frame === 80 ? 160 : frame === 160 ? 240 : 1;
        currentFrameRef.current = frame;
        drawFrame(frame);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [prefersReducedMotion, isLoaderFinished]);

  // Overlay opacity/y transforms for scrollytelling text phases
  const brandOpacity = useTransform(scrollYProgress, [0.0, 0.03, 0.16, 0.19], [0, 1, 1, 0]);
  const brandY = useTransform(scrollYProgress, [0.0, 0.03, 0.16, 0.19], [40, 0, 0, -40]);

  const morningOpacity = useTransform(scrollYProgress, [0.22, 0.25, 0.38, 0.41], [0, 1, 1, 0]);
  const morningY = useTransform(scrollYProgress, [0.22, 0.25, 0.38, 0.41], [40, 0, 0, -40]);

  const afternoonOpacity = useTransform(scrollYProgress, [0.44, 0.47, 0.60, 0.63], [0, 1, 1, 0]);
  const afternoonY = useTransform(scrollYProgress, [0.44, 0.47, 0.60, 0.63], [40, 0, 0, -40]);

  const goldenOpacity = useTransform(scrollYProgress, [0.66, 0.69, 0.82, 0.85], [0, 1, 1, 0]);
  const goldenY = useTransform(scrollYProgress, [0.66, 0.69, 0.82, 0.85], [40, 0, 0, -40]);

  const eveningOpacity = useTransform(scrollYProgress, [0.88, 0.91, 0.96, 1.0], [0, 1, 1, 0]);
  const eveningY = useTransform(scrollYProgress, [0.88, 0.91, 0.96, 1.0], [40, 0, 0, -40]);

  return (
    <div ref={containerRef} className="relative w-full h-[450vh] bg-[#111111]" id="hero-timeline">
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* The Painting Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

        {/* Architectural Grid Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Cinematic Text Overlays */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between h-full py-24 pointer-events-none">

          {/* Top Editorial Label */}
          <div className="flex justify-between items-center text-white/50 text-[10px] tracking-[0.3em] uppercase">
            <span>SAKSHAM ASSOCIATES</span>
            <span>THE CHRONOTOPIC EXHIBITION</span>
          </div>

          {/* Center Dynamic Storytelling Phases */}
          <div className="relative flex flex-col justify-center items-start w-full md:max-w-2xl min-h-[300px]">

            {/* Phase 0: Brand Spotlight */}
            <motion.div
              style={{ opacity: brandOpacity, y: brandY }}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-white"
            >
              <span className="text-[#D88E6C] text-xs font-sans tracking-[0.4em] uppercase">LUXURY ARCHITECTURAL ATELIER</span>
              <h1 className="text-5xl md:text-7xl font-light font-serif leading-none tracking-wide text-white">
                Saksham <br />
                <span className="editorial-serif-italic font-normal text-[#C08B00]">Associates</span>
              </h1>
              <div className="w-24 h-[1px] bg-[#D88E6C]/60" />
              <p className="text-sm md:text-base text-stone-300 leading-relaxed font-sans max-w-lg">
                Crafting premium sanctuaries and high-end workspaces in Kolkata. Where spatial geometry meets the poetry of light, curated with absolute restraint.
              </p>
            </motion.div>

            {/* Phase 1: Morning */}
            <motion.div
              style={{ opacity: morningOpacity, y: morningY }}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-white"
            >
              <span className="text-stone-300 font-serif italic text-lg md:text-xl tracking-wide">01 / Awakening</span>
              <h1 className="text-4xl md:text-6xl font-normal font-serif leading-tight tracking-wide text-stone-100">
                Soft Morning <br />Luminescence
              </h1>
              <p className="text-sm md:text-base text-stone-300 leading-relaxed font-sans max-w-lg mt-2">
                Where light meets architecture. As the first rays filter through, the space breathes with soft gradients, highlighting delicate textures and silent design lines.
              </p>
            </motion.div>

            {/* Phase 2: Midday */}
            <motion.div
              style={{ opacity: afternoonOpacity, y: afternoonY }}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-white"
            >
              <span className="text-stone-300 font-serif italic text-lg md:text-xl tracking-wide">02 / Definition</span>
              <h1 className="text-4xl md:text-6xl font-normal font-serif leading-tight tracking-wide text-stone-100">
                Midday Precision
              </h1>
              <p className="text-sm md:text-base text-stone-300 leading-relaxed font-sans max-w-lg mt-2">
                Crisp shadows and bright clarity. Midday sun accentuates structural integrity, spatial geometry, and the premium alignment of marble, raw concrete, and linen.
              </p>
            </motion.div>

            {/* Phase 3: Golden Hour */}
            <motion.div
              style={{ opacity: goldenOpacity, y: goldenY }}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-white"
            >
              <span className="text-stone-300 font-serif italic text-lg md:text-xl tracking-wide">03 / Warmth</span>
              <h1 className="text-4xl md:text-6xl font-normal font-serif leading-tight tracking-wide text-stone-100">
                The Golden Transition
              </h1>
              <p className="text-sm md:text-base text-stone-300 leading-relaxed font-sans max-w-lg mt-2">
                Amber warmth and dramatic geometry. Long rays dance across smoked oak and brushed brass, casting an intimate, emotionally rich aura over the living space.
              </p>
            </motion.div>

            {/* Phase 4: Evening */}
            <motion.div
              style={{ opacity: eveningOpacity, y: eveningY }}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-white"
            >
              <span className="text-stone-300 font-serif italic text-lg md:text-xl tracking-wide">04 / Serenity</span>
              <h1 className="text-4xl md:text-6xl font-normal font-serif leading-tight tracking-wide text-stone-100">
                Refined Evening <br />Ambiance
              </h1>
              <p className="text-sm md:text-base text-stone-300 leading-relaxed font-sans max-w-lg mt-2">
                Atmospheric twilight and low-glow warmth. Refined artificial lighting transforms the room into a quiet sanctuary, expressing sophistication, silence, and absolute comfort.
              </p>
            </motion.div>

          </div>

          {/* Bottom Interactive Indicators */}
          <div className="flex justify-between items-end w-full text-white/50 text-[10px] tracking-[0.2em] uppercase">
            <div className="flex gap-8">
              <span className={currentFrameRef.current <= 48 ? "text-white" : ""}>ATELIER</span>
              <span className={currentFrameRef.current > 48 && currentFrameRef.current <= 96 ? "text-white" : ""}>MORNING</span>
              <span className={currentFrameRef.current > 96 && currentFrameRef.current <= 144 ? "text-white" : ""}>MIDDAY</span>
              <span className={currentFrameRef.current > 144 && currentFrameRef.current <= 192 ? "text-white" : ""}>GOLDEN HOUR</span>
              <span className={currentFrameRef.current > 192 ? "text-white" : ""}>EVENING</span>
            </div>
            <div className="flex flex-col items-end">
              <span>SCROLL TO ADVANCE TIME</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Elegant Editorial Preloader Screen */}
      {!isLoaderFinished && (
        <div className="fixed inset-0 z-[200] bg-[#1a1816] flex flex-col justify-between p-12 text-white">
          <div className="text-xs tracking-[0.4em] text-stone-400 font-sans uppercase">
            SAKSHAM ASSOCIATES
          </div>

          <div className="flex flex-col gap-6 max-w-xl self-center text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-stone-100 leading-snug">
              Designing Spaces, <br />
              <span className="italic font-normal text-stone-300">Choreographing Light.</span>
            </h2>
            <div className="w-48 h-[1px] bg-stone-700/50 mx-auto my-4 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-stone-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <span className="text-[10px] tracking-[0.3em] text-stone-400 uppercase">
              PRELOADING SPATIAL TIMELINE: {loadingProgress}%
            </span>
          </div>

          <div className="flex justify-between items-center text-[10px] tracking-[0.2em] text-stone-500 uppercase">
            <span>EST. 2012</span>
            <span>KOLKATA, INDIA</span>
          </div>
        </div>
      )}
    </div>
  );
}
