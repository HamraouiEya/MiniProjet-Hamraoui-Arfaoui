import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  productForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  onSubmit()
  {
    let e=this.productForm.get('email')?.value;
    let p=this.productForm.get('pass')?.value;
    alert("Your account:\n"+ "Adress : "+e +"\n Password : "+p);
  }

  public get email()
  { return this.productForm.get('email'); }

  public get username()
  {
    return this.productForm.get('username');
  }
  public get adress()
  {
    return this.productForm.get('ad');
  }
  public get select()
  {
    return this.productForm.get('select');
  }
  public get code()
  {
    return this.productForm.get('code');
  }
  public get password()
  {
    return this.productForm.get('pass');
  }

  isValidrequireduser(){
    return this.productForm.controls['username'].errors?.['required'] &&
    this.productForm.controls['username'].touched;
    }
    isValidrequiredmail(){
      return this.productForm.controls['email'].errors?.['required'] &&
      this.productForm.controls['email'].touched;
      }
      isValidrequiredad(){
        return this.productForm.controls['ad'].errors?.['required'] &&
        this.productForm.controls['ad'].touched;
        }
        isValidrequiredselect(){
          return this.productForm.controls['select'].errors?.['required'] &&
          this.productForm.controls['select'].touched;
          }
          isValidrequiredcode(){
            return this.productForm.controls['code'].errors?.['required'] && 
            this.productForm.controls['username'].touched;
            }
            isValidPattern()
            {
              return this.productForm.controls['code'].errors?.['pattern']&&this.productForm.controls['username'].dirty;
            }
            isValidrequiredpass(){
              return this.productForm.controls['pass'].errors?.['required'] && 
              this.productForm.controls['pass'].touched;
              }
              isValidrequiredminLength(){
                return this.productForm.controls['pass'].errors?.['minLength'] && 
                this.productForm.controls['pass'].touched;
                }
  ngOnInit(): void {
    this.productForm = this.formBuilder.nonNullable.group(
      {
      username:['', Validators.required],
      email:['', [Validators.required, Validators.required]],
      ad:['',[Validators.required]],
      select:['',[Validators.required]],
      code:['',[Validators.required,Validators.pattern('[^0-9]')]],
      pass:['',[Validators.required,Validators.minLength(8)]]
      }
      )
      
  }

}
