import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
//var revealOnScroll = new RevealOnScroll();
var revealOnScrollFeatures = new RevealOnScroll($('.feature-item'), '85%');
var revealOnScrollTestimonials = new RevealOnScroll($('.testimonial'), '60%');
