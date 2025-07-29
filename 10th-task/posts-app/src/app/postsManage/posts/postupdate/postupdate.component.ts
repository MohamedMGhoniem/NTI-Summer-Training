import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PostsService } from '../services/posts.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './postupdate.component.html',
  styleUrls: ['./postupdate.component.scss'],
  providers: [PostsService],
})
export class PostUpdateComponent implements OnInit {
  postForm: FormGroup;
  postId: number = 0;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.getPost(this.postId);
    });
  }

  getPost(id: number) {
    this.postsService.getPost(id).subscribe((data) => {
      this.postForm.patchValue({
        title: data.title,
        body: data.body,
      });
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postsService
        .updatePost(this.postId, this.postForm.value)
        .subscribe(() => {
          alert('Post updated successfully!');
        });
    }
  }
}
