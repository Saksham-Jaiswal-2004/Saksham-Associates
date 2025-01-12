import CTA from "@/app/components/CTA";
import projects from "../../constants/projects.json";

export default async function ProjectPage({ params }) {
  const { id } = await params;

  const project = projects.find((item) => String(item.id) === id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="h-fit">
      <div className="testimonial h-[60vh] flex justify-start items-end">
        <div className='absolute h-full md:w-[50%] w-[100%] bg-[#0000009e]'></div>
        <h1 className="md:text-5xl text-3xl m-10 z-[2]">{project.title}</h1>
      </div>

      <div className="p-2 flex flex-col justify-center items-start my-16 text-center h-fit">
       <h1 className="text-2xl font-bold">{project.title}</h1>
       <p className="italic my-4">"{project.description}"</p>
       <ul className='flex flex-wrap gap-2'>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
       <p className="text-gray-500">{project.date}</p>
      </div>

      <CTA/>
    </div>
  );
}
