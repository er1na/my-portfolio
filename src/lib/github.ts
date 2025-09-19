import { Octokit } from "octokit";

export const github = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getGithubRepos(username: string) {
  const { data } = await github.rest.repos.listForUser({
    username: username,
    per_page: 100,
    sort: "updated",
  });
  return data.map((repo) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    updated_at: repo.updated_at,
    languages: repo.language,
  }));
}
