var hideSelectorsArray =[];

hideSelectorsArray = {
     'Crownbet/' : ["div.cb-carousel",".bv-nextup-race__info","span.countdown","div.promotional-banners",".hdo-location__list",".rm-bet__details",".rm-bet__silk",".rm-pick-selector__picks","a.hdo-next-to-jump__tile",".hdo-master-event",".ntj__events-list"] ,
     'Crownbet/racing-betting/':["div.promotional-banners",".hdo-location__list"],
     'Crownbet//':["div.promotional-banners",".hdo-location__list"]
}
console.log(Object.keys(hideSelectorsArray).length);
for(var k = 0; k < Object.keys(hideSelectorsArray).length; k++) {
    console.log(Object.keys(hideSelectorsArray)[k]);
    console.log(Object.values(hideSelectorsArray)[k]);
  }

  var clickSel="";
  var label="Crownbet/";

  var clickSelectorsArray =[];
  clickSelectorsArray={
    'Crownbet/' : 'button.hdo__event-type-expand-collapse'
  }

  if(label==Object.keys(clickSelectorsArray)[0])
  {
    clickSel=Object.values(clickSelectorsArray)[0];
  }
  console.log(clickSel);

  for(var key in hideSelectorsArray)
  {
    if(key!="Crownbet//")
    {
      console.log(hideSelectorsArray[key]);
    }
  }