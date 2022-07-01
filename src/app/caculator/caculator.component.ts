import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cong(){
    // @ts-ignore
    let st1 = +document.getElementById("st1").value;
    // @ts-ignore
    let st2 = +document.getElementById("st2").value;
    let kq = st2+st1
    alert("kết quả = "+kq)
  }

  tru(){
    // @ts-ignore
    let st1 = +document.getElementById("st1").value;
    // @ts-ignore
    let st2 = +document.getElementById("st2").value;
    let kq = st1-st2
    alert("kết quả = "+kq)
  }

  nhan(){
    // @ts-ignore
    let st1 = +document.getElementById("st1").value;
    // @ts-ignore
    let st2 = +document.getElementById("st2").value;
    let kq = st2*st1
    alert("kết quả = "+kq)
  }

  chia(){
    // @ts-ignore
    let st1 = +document.getElementById("st1").value;
    // @ts-ignore
    let st2 = +document.getElementById("st2").value;
    let kq = st1/st2
    if (st2==0){
      alert("lỗi ầm ầm")
    }else

      alert("kết quả = "+kq)
  }

}
