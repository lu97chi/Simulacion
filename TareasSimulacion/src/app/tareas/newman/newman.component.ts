import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-newman',
  templateUrl: './newman.component.html',
  styleUrls: ['./newman.component.scss']
})
export class NewmanComponent implements OnInit {
  option: Number;
  form: FormGroup;
  seed: any;
  numerosBase: any [] = [];
  numerosBaseUnsort: any [] = [];
  numerosExpo: any [] = [];
  selectedRandom: number;
  done = false;
  ready = false;
  constructor(private formBuilder: FormBuilder ) { 
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
    if (i == 'kN') {
      this.option = 1
    } else {
      this.option = 2;
    }
  }

  public start() {
    const number = this.form.get('number').value
    this.seed = this.newmanPow(number);
    this.calculo(this.seed);
  }

  public startR() {
    const number = Math.floor(Math.random()*(9999999999-1000000000))+1000000000;
    this.selectedRandom = number;
    this.seed = this.newmanPow(number);
    this.calculo(this.seed);
  }

  public newmanPow(n) {
    const seed = Math.pow(n,2);
    return seed;
  }

  public calculo(n) {
    let g = n;
    let i = 0;
    while(this.done == false){
      if(this.done) return console.log(this.done)      
      if(parseInt(g.toString().length) % 2 == 0){
        console.log('par');
        let h = g.toString().length
        let wc = this.ceros(g,h);
        let wcs = wc.toString().length
        let b = (Math.floor(parseInt(wcs)/2)-2);
        let nn = parseInt(wc.toString().substring(b, b+5));
        g = this.newmanPow(nn);
        this.numerosExpo.push(g);
        this.numerosBase.push(nn);
        this.numerosBaseUnsort.push(nn);
      }else{
        console.log('impar');
        let h = g.toString().length
        let b = (Math.floor(parseInt(h) / 2))-2;
        let nn = parseInt((g.toString().substring(b , b + 5)));
        g = this.newmanPow(nn);
        this.numerosExpo.push(g);
        this.numerosBase.push(nn);
        this.numerosBaseUnsort.push(nn);
      }
      this.numerosBase.sort();
      for(let k = 0; k <= this.numerosBase.length - 1; k++){
        if(this.numerosBase[k] == this.numerosBase[k+1]){
          this.done = true;
        }
      }
      console.log(i)
      i++;
    }
    console.log(this.numerosBase);
    console.log(this.numerosBaseUnsort);
  }

  public ceros (n, length) {
    if(n.toString().length <= length) return this.ceros(length,'0'+ n);
    else{
      return n;
    }
  }

  public onChange(i) {
    if(i != undefined) {
      if(i.substring(0,1) != '0' && i.length == 10){
        this.ready = true;
      }else{
        this.ready = false;
      }
    }
  }

}
