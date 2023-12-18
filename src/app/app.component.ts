import { Component, ElementRef, HostListener,Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private elr:ElementRef,private rendered: Renderer2
    ){}
    @ViewChild('inp2')
  inp2!: ElementRef<HTMLInputElement>;
  @ViewChild('inp1')
  inp1!: ElementRef<HTMLInputElement>;
  @ViewChild('inp3')
  inp3!: ElementRef<HTMLInputElement>;
  @ViewChild('inp4')
  inp4!: ElementRef<HTMLInputElement>;
    // @ViewChild('inp2') inp2 : ElementRef;
    ngAfterViewInit() {
      this.inp1.nativeElement.focus();
      // this.inp1.nativeElement.style.borderBottomColor = "#4287f5"
    }
  title = 'otptask';
  otpForm = new FormGroup({
    text1:new FormControl("",Validators.required),
    text4:new FormControl("",Validators.required)

  })

  onTextChange(eve:KeyboardEvent,data:any){
    
    console.log(eve)
    let d =eve.code
    console.log(this.otpForm)
    if(eve.code != 'Backspace'){
      if(data ==1){
        this.inp2.nativeElement.focus();
        this.inp1.nativeElement.disabled = true
      }
        else if(data == 2)
        {
          this.inp3.nativeElement.focus();
          this.inp2.nativeElement.disabled = true
  
        }
       else if(data == 3)
        {
          
          this.inp4.nativeElement.focus();
          this.inp3.nativeElement.disabled = true
  
        }
        else if(data == 4)
        {
          if(eve.code != 'Backspace'){
            alert("OTP successfully verified")

          }
          // this.inp4.nativeElement.focus();
          // this.inp4.nativeElement.disabled = true
  
        }
    }
      else if(eve.code == 'Backspace'){
        this.otpForm.controls['text4'].setValue(null)
        if(data == 4){

          // this.inp4.nativeElement.disabled = true
          this.inp3.nativeElement.focus();
  
          this.backFocus3()
        }
        else if(data == 3){
          this.backFocus2()

        }
    
    else if(data == 2){
      
        this.back1()
      }
      }
 
      // const nextInput = this.elr.nativeElement.querySelector(`#inp${d}`);
      // nextInput.focus();
      // let eleId = this.elr.nativeElement.querySelector('#inp1')
      // let r this.elr.
      // this.rendered.selectRootElement(nextInput).focus();
    
  }
  backFocus3(){
    this.inp3.nativeElement.disabled = false
    this.inp3.nativeElement.focus();
    // this.backFocus2()

    setTimeout(() =>{

    },300)
  }
  backFocus2(){
    this.inp2.nativeElement.disabled = false

    this.inp2.nativeElement.focus();
// this.back1()
  }
  back1(){
    this.inp1.nativeElement.disabled = false

    this.inp1.nativeElement.focus();

  }
  // @HostListener('key.enter')
  // keyChange(data:any){
  //   // this.elr.nativeElement.
  //   alert(1)
  // }
}
