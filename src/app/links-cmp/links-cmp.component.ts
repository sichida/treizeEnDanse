import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-cmp',
  templateUrl: './links-cmp.component.html',
  styleUrls: ['./links-cmp.component.scss']
})
export class LinksCmpComponent implements OnInit {
  public links:Array<Link> = new Array<Link>();

  constructor() { }

  ngOnInit() {
    this.links.push(new Link(`
    Retrouvez notre actualit&eacute; sur Facebook sur
    <a href="https://www.facebook.com/TreizeEnDanse/">notre page</a>
    d&eacute;di&eacute;e &agrave; l'&eacute;cole.`))
  }

}

class Link {
  constructor(public description:string) { }
}