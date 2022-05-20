import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Laptop from 'src/app/models/Laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.scss'],
})
export class LaptopDetailComponent implements OnInit {
  laptop?: Laptop;
  id!: string;
  isOpen?: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: LaptopService,
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.laptop = this.service.getLaptop(this.id);
    });
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let part = this.el.nativeElement.querySelector('.dropdown-menu');
    console.log(this.isOpen);
    if (this.isOpen) {
      this.renderer.addClass(part, 'show');
    } else {
      this.renderer.removeClass(part, 'show');
    }
  }

  onDelete(id: string) {
    this.service.onDeleteLaptop(id);
    this.router.navigate(["/laptops"]);
  }
}
