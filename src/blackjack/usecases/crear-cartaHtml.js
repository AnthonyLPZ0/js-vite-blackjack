
/**
 * 
 * @param {String} carta 
 * @param {HTMLImageElement} 
 */

export const crearCartaHTML = (carta) => {

    if(!carta) throw new Error('La carta ess un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}