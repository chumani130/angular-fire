import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface blog{title: any; body: any}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  title: any;
  body: any;

  constructor(private db: AngularFirestore) { }


  addNewUser(title:any, body:any) {
    
    const blog: blog={title,body}
    this.db.collection("Blogs").doc(this.title).set(blog);
 }
}