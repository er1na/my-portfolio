import { getGithubRepos } from "@/lib/github";
import ProjectsClient from "./ProjectsClient";

export default async function Projects() {
  const repos = await getGithubRepos("er1na");
  const latestRepos = repos.slice(0, 3);
  return <ProjectsClient latestRepos={latestRepos} />
}