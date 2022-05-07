import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Ingredient from 'src/app/models/Ingredient';
import Recipe from 'src/app/models/Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  isOpen: boolean;
  id: number;
  @Input() recipe: Recipe;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private service: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.service.getRecipe(this.id);
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

  onAddIngredientsToShoppingList() {
    this.service.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.service.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
