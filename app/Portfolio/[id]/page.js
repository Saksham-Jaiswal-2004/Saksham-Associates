import CTA from "@/app/components/CTA";
// import useFetchProjectById from '../../hooks/fetchProjectByID'
import { getProjectById } from "@/app/hooks/getProjectByID";

export default async function ProjectPage({ params }) {

  const id = params.id;
  const project = await getProjectById(id);

  if (!project) {
    return <p className="h-[55vh] flex justify-center items-center">Project not found.</p>;
  }

  return (
    <div className="h-fit">
      <div className="testimonial h-[60vh] flex justify-start items-end">
        <div className='absolute h-full md:w-[50%] w-[100%] bg-[#0000009e]'></div>
        <h1 className="md:text-5xl text-3xl m-10 z-[2]" aria-label={project.title}>{project.title}</h1>
      </div>

      <div className="p-2 flex flex-col justify-center items-start my-16 text-center h-fit">
       <h1 className="text-2xl font-bold">{project.title}</h1>
       <p className="italic my-4">&quot;{project.description}&quot;</p>
       <p className="text-gray-500">{new Date(`${project.time}-01`).toLocaleString("default", { month: "short", year: "numeric" })}</p>
      </div>

      <CTA/>
    </div>
  );
}
