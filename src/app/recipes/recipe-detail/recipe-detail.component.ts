import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import Recipe from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  isOpen: boolean;
  @Input() recipe: Recipe;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

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
}
