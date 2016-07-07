## short-term/now
- optimize/for 620(site will use in the beginning only 620)
## features/other list
- needs the ability to change css for a elementsee below and notes(aspect ratio)
- better positioning on the icon
- fake shadow underneath dynamic header
- why ul/li instead of div?seo?
## notes
2 variations
-  FORMULA: what can this be called?padding bottom technique/aspect ratio
- UPDATE: adding bottom doesn't have to do with height so much as what to include for example 620 version
- different padding bottom %
- 360x360
    -     css for the containing a element
    .grid-block.-aspect-16x7 {
        height: 0;
        padding-bottom: 43.75%;
    }
        - there are some more css regarding positioning and width of the image
- 620x620
    -     css for the containing a element
    .grid-block.-aspect-16x9 {
    height: 0;
    padding-bottom: 56.25%;
    }
- 1240x1240
    css for the containing a element
    .grid-block.-aspect-1x1 {
    height: 0;
    padding-bottom: 100%;
    }
