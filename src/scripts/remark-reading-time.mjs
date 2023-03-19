import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
/**
 * 统计阅读文章时间
 * @returns 
 */
export function remarkReadingTime() {
  console.log('11')
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}