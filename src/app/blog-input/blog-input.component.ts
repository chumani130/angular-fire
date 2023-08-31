import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ContactService } from '../contact.service';

export interface blog{title: any; body: any}

@Component({
  selector: 'app-blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.scss']
})
export class BlogInputComponent implements OnInit {
  

  constructor(
    private firestore: AngularFirestore,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    
  }

  title: any;
  body: any;

  SendToFirebase(){
    //collect inputs
    const title: any = this.title;
    const body: any = this.body;
    this.contactService.addNewUser(title,body);

    console.log(this.contactService.addNewUser(title,body))

    console.log(title)
    console.log(body)

    //send input
    const blog: blog={title,body}
    this.firestore.collection("Blogs").doc(this.title).set(blog)
  }

}
