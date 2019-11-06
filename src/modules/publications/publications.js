/**
 * Agence'O - publications
 * @author Guillaume Bouillon (Agence'O)
 * @created 03/04/2019
 */

import appConfig from '../../config';
import { getResourceByNsAndKey } from '../../localization';
import './publications.scss';

const coverSrc = getResourceByNsAndKey('publications--economic', 'cover-src');

$('#publication-economic-cover-img').attr('src', `${appConfig.assetPath}${coverSrc}`);
