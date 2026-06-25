import { Component, inject, OnInit, signal } from '@angular/core';
import { comment, post, PostService } from '../post.service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  private postService = inject(PostService);

  posts = signal<post[]>([]);
  comments = signal<comment[]>([]);
  close = true; // close at first
  ngOnInit() {
    this.postService.getPost().subscribe((data) => {
      this.posts.set(data);
    });
  }

  showComment(id: number) {
    if (!this.close) { this.close = true; return; }
    this.postService.getComment(id).subscribe((data) => {
      this.comments.set(data);
      this.close = false; // after clicking and rendering, opened 
    });
  }
}

