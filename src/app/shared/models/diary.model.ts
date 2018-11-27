export class Diary {

  key: string;
  authorKey: string;

  author = null;
  password = null;
  startDate: number;
  latestEntryDate: number;

  title: string;
  isPrivate = false;
  description: string;
  tags = [];
  cover = null;

  constructor(author: string, title: string, isPrivate: boolean, description: string, tags?: string[], cover ? ) {
    this.author = author;
    this.title = title;
    this.isPrivate = isPrivate;
    this.description = description;
    this.tags = tags;
    this.cover = cover;

    this.startDate = new Date().getTime();
  }


}
