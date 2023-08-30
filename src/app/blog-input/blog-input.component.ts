import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface blog{title: any; body: any}

@Component({
  selector: 'app-blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.scss']
})
export class BlogInputComponent implements OnInit {
  

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    
  }

  title: any;
  body: any;

  SendToFirebase(){
    //collect inputs
    const title: any = this.title;
    const body: any = this.body;

    console.log(title)
    console.log(body)

    //send input
    const blog: blog={title,body}
    this.firestore.collection("Blogs").doc(this.title).set(blog)

  }

}
