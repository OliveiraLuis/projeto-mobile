import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Usuario } from '../models/usuario.interface'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  private usuariosWhereCollection: AngularFirestoreCollection<Usuario>;

  constructor(protected db: AngularFirestore,
              protected where: AngularFirestore) {
    this.usuariosCollection = db.collection<Usuario>('usuario');
  }

  getClientes() {
    return this.usuariosCollection.snapshotChanges();
  }

  getCliente(id: string) {
    return this.usuariosCollection.doc<Usuario>(id).valueChanges();
  }

  updtCliente(usuario: Usuario, id: string) {
    return this.usuariosCollection.doc(id).update(usuario);
  }

  addCliente(usuario: Usuario) {
    return this.usuariosCollection.add(usuario);
  }

  delCliente(id: string) {
    return this.usuariosCollection.doc(id).delete();
  }

}