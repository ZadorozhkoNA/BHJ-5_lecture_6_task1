let links = document.body.querySelectorAll( 'a.has-tooltip' );

function floatTip( event ) {
  event.preventDefault();

  links.forEach( (item) => {
    let tipActiv = item.querySelector( '.tooltip_active' )
    if ( tipActiv && item !== event.currentTarget ) {
      tipActiv.classList.remove( 'tooltip_active' );
    }
  });

  let tip = event.currentTarget.querySelector( 'div.tooltip' );
  tip.classList.toggle( 'tooltip_active' );
  tip.style.top = event.currentTarget.getBoundingClientRect().top + event.currentTarget.getBoundingClientRect().height + 'px';
  tip.style.left = event.currentTarget.getBoundingClientRect().left + 'px';
}


function addElement( array ) {
  array.forEach( (item) => {
    let newDiv = document.createElement( 'div' );
    newDiv.classList.add( 'tooltip' );
    newDiv.textContent = item.title;
    item.appendChild( newDiv );
  });
}

addElement( links );

links.forEach( (item) => {
  item.addEventListener( 'click', floatTip );
});
