import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';
import Modal from './modules/Modal.js';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
//var revealOnScroll = new RevealOnScroll();
var revealOnScrollFeatures = new RevealOnScroll($('.feature-item'), '85%');
var revealOnScrollTestimonials = new RevealOnScroll($('.testimonial'), '60%');

var stickyHeader = new StickyHeader();

var modal = new Modal();
