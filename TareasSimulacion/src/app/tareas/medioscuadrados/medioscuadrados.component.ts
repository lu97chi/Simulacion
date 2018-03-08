import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-medioscuadrados',
  templateUrl: './medioscuadrados.component.html',
  styleUrls: ['./medioscuadrados.component.scss']
})
export class MedioscuadradosComponent implements OnInit {
  option: Number;
  form: FormGroup;
  numerosBase: any [] = [];
  numerosBaseUnsort: any[] = []
  numerosExpo: any [] = [];
  done = false;
  seed: any;
  selectedRandom: number;
  ready = false;
  constructor(private formBuilder: FormBuilder) { 
    this.option = 0;
    this.createForm()
  }
  createForm() {
    this.form = this.formBuilder.group({
      number: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public options (i) {
    if (i == 'kS') {
      this.option = 1
    } else {
      this.option = 2;
    }
  }

  public start() {
    const number = this.form.get('number').value
    this.seed = this.middleSquare(number);
    this.calculo(this.seed);
  }

  public startR() {
    const number = Math.floor(Math.random()*(9999-1000))+1000;
    this.selectedRandom = number;
    this.seed = this.middleSquare(number);
    this.calculo(this.seed);
  }

  public calculo(n) {
    let  g = n;
    let i = 0;
    while( this.done == false  ){
      if(g.toString().length < 8) {
        let j = this.ceros(g,7);
        let h = j.substring(2,6);
        g = this.middleSquare(parseInt(h));
        this.numerosBase.push(h);
        this.numerosBaseUnsort.push(h);
        this.numerosExpo.push(g);
      }else{
        let j = g.toString().substring(2,6);
        g = this.middleSquare(parseInt(j))
        this.numerosBase.push(j);
        this.numerosBaseUnsort.push(j);
        this.numerosExpo.push(g);
      }
      this.numerosBase.sort();
      for(let k = 0; k <= this.numerosBase.length - 1; k++){
        if(this.numerosBase[k] == this.numerosBase[k+1]){
          this.done = true;
        }
      }
      i++;    
    }
  }

  public middleSquare(number){
    const seed = Math.pow(number,2);
    return seed;
  }

  public ceros (n, length) {
    if(n.toString().length <= length) return this.ceros(length,'0'+ n);
    else{
      return n;
    }
  }

  public onChange(i) {
    if(i != undefined) {
      if(i.substring(0,1) != '0' && i.length == 4){
        this.ready = true;
      }else{
        this.ready = false;
      }
    }
  }

}
