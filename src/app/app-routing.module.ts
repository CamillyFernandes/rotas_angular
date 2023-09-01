import { ListarProdutoComponent } from './components/produtos/listar-produto/listar-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component: ListarProdutoComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
