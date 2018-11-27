import { NavLink } from '../shared/models';

const mainNavLinks: Array<NavLink> = [
    new NavLink('/dashboard', 'Dashboard', 'newicons2.svg#icon-dashboard'),
    new NavLink('/my-diaries', 'My Diaries', 'newicons2.svg#icon-mydiaries'),
    new NavLink('/followed', 'Followed', 'newicons2.svg#icon-followed'),
];

const searchNavLink: Array<NavLink> = [
    new NavLink('/search-results', 'Search Results', 'newicons2.svg#icon-search'),
];

const userNavLinks: Array<NavLink> = [
];

export function getMainNavLinks() {
    return mainNavLinks;
}

export function getUserNavLinks() {
    return userNavLinks;
}

export function getSearchNavLink() {
    return searchNavLink;
}