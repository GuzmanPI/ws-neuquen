import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../entities/hero';
import { HeroService } from '../hero.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {
  /** Edit hero form group */
  heroForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    imageUrl: [''],
    detail: this.formBuilder.group({
      id: ['', Validators.required],
      alias: ['', Validators.required],
      portraitUrl: [''],
      description: ['', Validators.required],
      longDescription: ['', Validators.required]
    }),
    stats: this.formBuilder.group({
      id: ['', Validators.required],
      intelligence: [1],
      strength: [1],
      speed: [1],
      durability: [1],
      combat: [1],
      coding: [1]
    })
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getHeroFromRouter();
  }

  /** @desc Gets the hero's detail from the activated route and sets the values into the heroForm form group. */
  private getHeroFromRouter(): void {
    // @ts-ignore
    const hero = this.activatedRoute.data.value.hero;

    console.log(hero);
    this.heroForm.patchValue(hero as Hero);
  }

  /** @desc Updates a hero. */
  onSubmit(): void {
    if (this.heroForm.valid) {
      const editedHero = this.heroForm.value as Hero;

      if (!editedHero.imageUrl) {
        editedHero.imageUrl =
          'https://lh3.googleusercontent.com/PqEq-DsMhWyM8VFuAQtOEfZmTG6jVVDqQMcGd-EFIGe7hzz7kHJ9zxaNuWKe0vdEBCVkLD2kGUtS8tZzHEDNcaPvwJbXf_9lz0Hm0Cy4FUA5YIVlH6jYKZoI9F6SybfyoVP2XqurmJzV0pJVVapBr9a83yjB-u9BLpa-78Ah_-21O-cotTTavmApqstOIy52Y4F-uuOU0qMJsmEzABQ8WOLqU58rdx4ZQM1tSbZOZxtTCwzWBbLSL-R3qemBQDZOQPTfc31z0cgy0egoTNWe-g_yiO_h_eqiMPgJIDrk-0Uody4YLUSXULqxDUo4K1U-uJZGsTVmsZ-Zi3iLLEkq8M4g-TPPWjd1LJMKFYxfAKSy0w4TXbhSS1geY6PwWtDcnkBbxh2zuChhBzSUtlOQV1VLsRvT88mVJsfeVBidB7dIbYb0DvDcVn6VvLAKjExox3Df7JwbfBQ16LONstBj-oURV4Hw0_1v2d63-KtMEPlqOl_3I4KuA-69SAyC2WPSR6m2__KhjshLFmQMtha5qUdtxsI47GS3rvrCxvk20v8c34U7LfDurduNBwH9dKRqMJKTVxsVfdfwlot4Cf0QVH74nWpu9H6VIA1WpAsC77kfQDM73lRlKaPole8U66PLlZidQITEKeeZ4wrQyzkJYgpK=w1360-h1362-no';
      }

      if (!editedHero.detail.portraitUrl) {
        editedHero.detail.portraitUrl =
          'https://lh3.googleusercontent.com/C5C05GjClniQtRy0BxurojxGPiVlLtoV9RfzO3NGS01F1GzLygylM7MZW8AlCP5IrR2EjGra3nbEovnY4N4MYo4V7GbeUX7H6p0BH-btBbxFZ4CqnPCK_aQk4oaAabH3SW1WfazreSb-229d07GkefqolsGwjvACMiIhn0acdq6eLbuIm7ImUNwblr2NrDnxohVpJgw4J4y0SH6qr7b1Il8YTvIAY_PChT-ghaGJc9FsKDBQLIJ1x8HifcdzlluM9zYlnfYFF5J5uxw0-aBYiwG2rkWoBupQ_F24Aupo3JpDxLbU5caWZ_glj6RWPaRp6-xVARf_VoI0UMb8VM80uFsi-wfy_lW7rW5iE7c_FWr93ap8stS8Qh4lWXgIP6yWFEvsTQ0UV93wbxss8UNMRIRcwfrva77mzrBblw8ebNijR3_xPH1-KgEg40qcqQVkE2WNzPdYkH_DHamq-dubE8KKLSiTIea_KvT2Q8Mm47Pj735m-Xrt33OlH9_d2LbhC_3SpzBDv5iuS95871GZucCgcPHNpGyPRHQpJElC-zaWBO1yDE48MDB_XBuxcaUc8DsM_2ugWbP34ha6I0uslnWpTu9Dz0word1ngI-vz2Q3H2Pbsi-03h5vd7MzWhHoPk5zLns0sYWq2UQrC8b_vuJk=w1920-h1080-no';
      }

      this.heroService.editHero(editedHero).then(hero => {
        if (hero) {
          this.successfulCreation();
        }
      });
    }
  }

  /** @desc Shows a snackbar with a successful message and redirects to the heroes dashboard. */
  private successfulCreation(): void {
    const config = new MatSnackBarConfig();
    config.duration = 500;
    config.panelClass = 'center';

    this.matSnackBar.open('Successfully edited a new hero', null, config);
    this.router.navigateByUrl('/heroes-dashboard');
  }
}
