export async function fetchMarkdownContent(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch markdown content from ${url}`);
    }
    const markdown = await res.text();
    return markdown;
  }
  