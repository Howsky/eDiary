export class Entry {

  key: string;
  parentDiaryKey: string;
  authorKey: string;
  author: string;
  title: string;
  postDate: number;
  content: string;
  mainPhoto: string;
  tags: string;

  constructor(title: string, content: string, author: string, tags: string) {

    this.title = title;
    this.content = content;
    this.author = author;
    this.tags = tags;
    this.postDate = new Date().getTime();

  }

}
