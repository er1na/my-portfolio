import { getGithubRepos } from "@/lib/github";
import SkillsClient from "./SkillsClient";
import { formatLanguages } from "@/lib/format_languages";

export default async function Skills() {
  const repos = await getGithubRepos("er1na");
  const ReposLanguages = formatLanguages(repos.map(repo => repo.languages));
  return <SkillsClient ReposLanguages={ReposLanguages} />
}