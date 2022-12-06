import { Component, OnInit,Input } from '@angular/core';
import { Comments } from '../comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()comm!:Comments;
  constructor() { }

  ngOnInit(): void {
  }

}
