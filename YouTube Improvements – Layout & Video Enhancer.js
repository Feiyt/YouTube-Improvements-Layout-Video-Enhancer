// ==UserScript==
// @name        YouTube Improvements – Layout & Video Enhancer
// @name:zh-CN  YouTube 改进 – 布局与视频增强
// @name:zh-TW  YouTube 改進 – 版面與影片增強
// @name:ar     تحسينات YouTube – تحسين التخطيط والفيديو
// @name:bg     Подобрения за YouTube – Оформление и видео подобрения
// @name:cs     Vylepšení YouTube – Rozvržení a vylepšení videa
// @name:da     YouTube-forbedringer – Layout- og videoforbedring
// @name:de     YouTube-Verbesserungen – Layout- und Video-Optimierung
// @name:el     Βελτιώσεις YouTube – Διάταξη και ενίσχυση βίντεο
// @name:en     YouTube Improvements – Layout & Video Enhancer
// @name:eo     YouTube-Plibonigoj – Aranĝo kaj Video-Plibonigilo
// @name:es     Mejoras de YouTube – Diseño y mejora de video
// @name:es-419 Mejoras de YouTube – Diseño y mejora de video
// @name:fi     YouTube-parannukset – Asettelu ja videon tehostus
// @name:fr     Améliorations YouTube – Mise en page et amélioration vidéo
// @name:fr-CA  Améliorations YouTube – Mise en page et amélioration vidéo
// @name:he     שיפורי YouTube – פריסה ושיפור וידאו
// @name:hr     YouTube poboljšanja – Izgled i poboljšanje videa
// @name:hu     YouTube fejlesztések – Elrendezés és videó javítása
// @name:id     Peningkatan YouTube – Tata letak & peningkat video
// @name:it     Miglioramenti di YouTube – Layout e potenziamento video
// @name:ja     YouTube 改善 – レイアウトと動画強化
// @name:ka     YouTube-ის გაუმჯობესებები – განლაგება და ვიდეოს გაძლიერება
// @name:ko     YouTube 개선 – 레이아웃 및 동영상 향상
// @name:nb     YouTube-forbedringer – Layout og videoforbedring
// @name:nl     YouTube-verbeteringen – Lay-out en videoverbetering
// @name:pl     Ulepszenia YouTube – Układ i ulepszanie wideo
// @name:pt-BR  Melhorias do YouTube – Layout e aprimoramento de vídeo
// @name:ro     Îmbunătățiri YouTube – Aspect și îmbunătățire video
// @name:ru     Улучшения YouTube – Макет и улучшение видео
// @name:sv     YouTube-förbättringar – Layout och videoförbättring
// @name:th     การปรับปรุง YouTube – เลย์เอาต์และการเพิ่มประสิทธิภาพวิดีโอ
// @name:tr     YouTube İyileştirmeleri – Düzen ve video geliştirme
// @name:uk     Покращення YouTube – Макет і покращення відео
// @name:ug     YouTube ياخشىلىنىشى – ئورۇنلاشتۇرۇش ۋە سىن كۈچەيتىش
// @name:vi     Cải tiến YouTube – Bố cục và tăng cường video
// @description       A userscript that enhances YouTube with optimized video details, screenshot capture, theme controls, playback speed controls, and more.
// @description:zh-CN 一个用于增强 YouTube 的用户脚本，提供视频详情页优化、视频截图、主题切换、播放速度控制等功能。
// @description:zh-TW 一個用於強化 YouTube 的使用者腳本，提供影片詳細頁面優化、影片截圖、主題切換、播放速度控制等功能。
// @description:ar    سكريبت مستخدم يعزز YouTube من خلال تحسين تفاصيل الفيديو، والتقاط لقطات الشاشة، والتحكم في السمات وسرعة التشغيل، والمزيد.
// @description:bg    Потребителски скрипт, който подобрява YouTube с оптимизирани детайли за видеото, екранни снимки, управление на темата и скоростта на възпроизвеждане.
// @description:cs    Uživatelský skript, který vylepšuje YouTube optimalizací detailů videa, snímky obrazovky, ovládáním motivu a rychlosti přehrávání.
// @description:da    Et brugerscript, der forbedrer YouTube med optimerede videodetaljer, skærmbilleder samt styring af tema og afspilningshastighed.
// @description:de    Ein Userskript, das YouTube mit optimierten Videodetails, Screenshots sowie Steuerungen für Design und Wiedergabegeschwindigkeit erweitert.
// @description:el    Ένα userscript που βελτιώνει το YouTube με βελτιστοποιημένες λεπτομέρειες βίντεο, στιγμιότυπα οθόνης και ελέγχους θέματος και ταχύτητας αναπαραγωγής.
// @description:eo    Uzantskripto kiu plibonigas YouTube per optimumigitaj videodetaloj, ekrankopioj kaj kontroloj por temo kaj reprodukta rapideco.
// @description:es    Un script de usuario que mejora YouTube con detalles de vídeo optimizados, capturas de pantalla y controles de tema y velocidad de reproducción.
// @description:fi    Käyttäjäskripti, joka parantaa YouTubea optimoiduilla videotiedoilla, kuvakaappauksilla sekä teeman ja toistonopeuden hallinnalla.
// @description:fr    Un script utilisateur qui améliore YouTube avec des détails vidéo optimisés, des captures d’écran et des contrôles du thème et de la vitesse de lecture.
// @description:fr-CA Un script utilisateur qui améliore YouTube grâce à des détails vidéo optimisés, des captures d’écran et des contrôles du thème et de la vitesse de lecture.
// @description:he    סקריפט משתמש שמשפר את YouTube באמצעות פרטי וידאו מותאמים, צילומי מסך ובקרות ערכת נושא ומהירות הפעלה.
// @description:hr    Korisnički skript koji poboljšava YouTube optimiziranim detaljima videozapisa, snimkama zaslona te kontrolama teme i brzine reprodukcije.
// @description:hu    Felhasználói szkript a YouTube fejlesztéséhez optimalizált videórészletekkel, képernyőképekkel, valamint téma- és lejátszási sebességvezérléssel.
// @description:id    Skrip pengguna yang meningkatkan YouTube dengan detail video yang dioptimalkan, tangkapan layar, serta kontrol tema dan kecepatan pemutaran.
// @description:it    Uno script utente che migliora YouTube con dettagli video ottimizzati, schermate e controlli del tema e della velocità di riproduzione.
// @description:ja    YouTube の動画詳細を最適化し、スクリーンショット、テーマ、再生速度を制御できるユーザースクリプトです。
// @description:ka    მომხმარებლის სკრიპტი, რომელიც YouTube-ს აუმჯობესებს ვიდეოს დეტალების ოპტიმიზაციით, ეკრანის გადაღებით და თემისა და დაკვრის სიჩქარის მართვით.
// @description:ko    최적화된 동영상 세부 정보, 스크린샷, 테마 및 재생 속도 제어 기능을 제공하는 YouTube 개선 사용자 스크립트입니다.
// @description:nb    Et brukerskript som forbedrer YouTube med optimaliserte videodetaljer, skjermbilder samt styring av tema og avspillingshastighet.
// @description:nl    Een gebruikersscript dat YouTube verbetert met geoptimaliseerde videodetails, screenshots en bediening van thema en afspeelsnelheid.
// @description:pl    Skrypt użytkownika ulepszający YouTube dzięki zoptymalizowanym szczegółom wideo, zrzutom ekranu oraz sterowaniu motywem i szybkością odtwarzania.
// @description:pt-BR Um script de usuário que aprimora o YouTube com detalhes de vídeo otimizados, capturas de tela e controles de tema e velocidade de reprodução.
// @description:ro    Un script de utilizator care îmbunătățește YouTube cu detalii video optimizate, capturi de ecran și controale pentru temă și viteza de redare.
// @description:ru    Пользовательский скрипт, улучшающий YouTube благодаря оптимизированным деталям видео, скриншотам и управлению темой и скоростью воспроизведения.
// @description:sv    Ett användarskript som förbättrar YouTube med optimerade videodetaljer, skärmbilder samt styrning av tema och uppspelningshastighet.
// @description:th    สคริปต์ผู้ใช้ที่ช่วยปรับปรุง YouTube ด้วยรายละเอียดวิดีโอที่เหมาะสม ภาพหน้าจอ และการควบคุมธีมกับความเร็วการเล่น
// @description:tr    YouTube'u optimize edilmiş video ayrıntıları, ekran görüntüleri, tema ve oynatma hızı denetimleriyle geliştiren kullanıcı betiği.
// @description:uk    Користувацький скрипт, що покращує YouTube оптимізованими деталями відео, знімками екрана та керуванням темою і швидкістю відтворення.
// @description:ug    YouTube نى ئەلالاشتۇرۇلغان سىن تەپسىلاتلىرى، ئېكران كۆرۈنۈشلىرى، تېما ۋە قويۇش سۈرئىتىنى كونترول قىلىش ئىقتىدارلىرى بىلەن كۈچەيتىدىغان ئىشلەتكۈچى سكرىپتى.
// @description:vi    Userscript cải thiện YouTube với thông tin video được tối ưu hóa, ảnh chụp màn hình và điều khiển chủ đề cùng tốc độ phát.
// @namespace   feiyt_youtube_improvements
// @version     1.0.2
// @author      Feiyt, Thalrien.vx, CY Fung
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAgCAYAAACLmoEDAAABo0lEQVR4AdSXAZKDIBAEiR878zL1Zbmf5aY3txaWpqKyWCS1I4jotiMi6VLh75lSv1eFqdIKNks8qv7I9FR9JQE89mrr/KzNc5HXpOsuYgGrE0cd9eSD6n0mVauG5yKvCR7kWWdYNSoSnfxYCyU8g8C4kdcw0A6OtgD3jgHoF6x62I7KVsNe4k6umsWtUmZcA2P2W2DnYZDdQLPVHmd/AvB+A67x8RLAfuy0o8N0S0mRplTxFwVriKJlCqwGDGzoCwawpIh3GVhzJXoj2lFSxEFXg/WbF60PjeLhUR0WaICR6kXAl8AK0oMpDvn+ofISWD7pki89T7/Q1WEFyZgF9DSk218NFkhJEbdGBvb0GPI7zkvRsZzDyfBlJ7B5rtP1DBLQ4ke+BRIFi4vVIB08CvaQk578aAls0UR9NGFJf2BLzr/y3KnTZzB0NqhJ7842PxRk6miwVORIyw6bmQYr0CTgu0prVNlKYOBdbHyyl/9uaZQUCWhEZ3QFPHlc5AYS0Wb5Z2dt738jWlb5iM7opraV1J2ncVhb11IbeVzkniGVx+IPAAD///H503IAAAAGSURBVAMApvWIs8xfbPkAAAAASUVORK5CYII=
// @include     *://*.youtube.com/**
// @exclude     /^https?://\w+\.youtube\.com\/live_chat.*$/
// @exclude     /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @noframes
// @license     MIT
// @homepageURL  https://github.com/Feiyt/youtube-improvements-layout-video-enhancer
// @run-at      document-start
// @grant       GM_registerMenuCommand
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       unsafeWindow
// @grant       GM_addElement
// @downloadURL https://greasyfork.org/scripts/595521-youtube-improvements-layout-video-enhancer
// @updateURL https://greasyfork.org/scripts/595521-youtube-improvements-layout-video-enhancer
// ==/UserScript==
(function () {
  'use strict';

  
  /*!
   * Before using this script, please make sure to read the information provided
   * in the @description section, which includes an overview of the script’s
   * features and the privacy notice. By continuing to use this script, you
   * acknowledge that you have read and understood the relevant content.
   * If you do not agree, please stop using the script immediately.
   *
   * 
  * Copyright (c) 2024 - 2026, Feiyt.
   * All rights reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */


  var css_248z$2 = "@keyframes relatedElementProvided{0%{background-position-x:3px}to{background-position-x:4px}}html[tabview-loaded=icp] #related.ytd-watch-flexy{animation:relatedElementProvided 1ms linear 0s 1 normal forwards}html[tabview-loaded=icp] #right-tabs #related.ytd-watch-flexy,html[tabview-loaded=icp] #right-tabs ytd-expander#expander,html[tabview-loaded=icp] [hidden] #related.ytd-watch-flexy,html[tabview-loaded=icp] [hidden] ytd-expander#expander,html[tabview-loaded=icp] ytd-comments ytd-expander#expander{animation:initial}#secondary.ytd-watch-flexy{position:relative}#secondary-inner.style-scope.ytd-watch-flexy{height:100%}ytd-watch-flexy #secondary{--tyt-secondary-mt:var(--ytd-margin-6x);--tyt-secondary-mb:var(--ytd-margin-6x);--tyt-secondary-mr:var(--ytd-margin-6x)}ytd-watch-flexy[reduced-top-margin] #secondary{--tyt-secondary-mt:var(--ytd-margin-3x);--tyt-secondary-mb:var(--ytd-margin-3x)}secondary-wrapper{border:0;box-sizing:border-box;contain:size style;flex-wrap:nowrap;height:100%;left:0;max-height:calc(100vh - var(--ytd-toolbar-height, 56px));padding:0;padding-bottom:var(--tyt-secondary-mb);padding-right:var(--tyt-secondary-mr);padding-top:var(--tyt-secondary-mt);position:absolute;right:0;top:0}#right-tabs,secondary-wrapper{display:flex;flex-direction:column;margin:0}#right-tabs{flex-grow:1;padding:0;position:relative}[tyt-tab=\"\"] #right-tabs{flex-grow:0}[tyt-tab=\"\"] #right-tabs .tab-content{border:0}#right-tabs .tab-content{flex-grow:1}ytd-watch-flexy[hide-default-text-inline-expander] #primary.style-scope.ytd-watch-flexy ytd-text-inline-expander{display:none}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden{--comment-pre-load-sizing:90px;border:0;contain:strict;display:block!important;height:var(--comment-pre-load-sizing)!important;left:2px;margin:0;overflow:hidden;padding:0;pointer-events:none!important;position:fixed!important;top:2px;visibility:collapse;width:var(--comment-pre-load-sizing)!important;z-index:-1}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>ytd-item-section-renderer#sections{border:0;contain:strict;display:block!important;height:var(--comment-pre-load-sizing);margin:0;overflow:hidden;padding:0;width:var(--comment-pre-load-sizing)}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>ytd-item-section-renderer#sections>#contents{border:0;contain:strict;display:flex!important;flex-direction:row;gap:60px;height:var(--comment-pre-load-sizing);margin:0;overflow:hidden;padding:0;width:var(--comment-pre-load-sizing)}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments #contents{--comment-pre-load-display:none}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments #contents>:last-child,ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments #contents>:only-of-type{--comment-pre-load-display:block}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments #contents>*{display:var(--comment-pre-load-display)!important}#right-tabs #material-tabs{border:1px solid var(--ytd-searchbox-legacy-border-color);display:flex;overflow:hidden;padding:0;position:relative}[tyt-tab] #right-tabs #material-tabs{border-radius:var(--tyt-rounded-a1) var(--tyt-rounded-a1) var(--tyt-rounded-a1) var(--tyt-rounded-a1)}[tyt-tab^=\"#\"] #right-tabs #material-tabs{border-radius:var(--tyt-rounded-a1) var(--tyt-rounded-a1) 0 0}ytd-watch-flexy:not([is-two-columns_]) #right-tabs #material-tabs{outline:0}#right-tabs #material-tabs a.tab-btn[tyt-tab-content]>*{pointer-events:none}#right-tabs #material-tabs a.tab-btn[tyt-tab-content]>.font-size-right{display:none;pointer-events:auto}ytd-watch-flexy #right-tabs .tab-content{border:1px solid var(--ytd-searchbox-legacy-border-color);border-radius:0 0 var(--tyt-rounded-a1) var(--tyt-rounded-a1);border-top:0;box-sizing:border-box;display:block;display:flex;flex-direction:row;overflow:hidden;padding:0;position:relative;top:0}ytd-watch-flexy:not([is-two-columns_]) #right-tabs .tab-content{height:100%}ytd-watch-flexy #right-tabs .tab-content-cld{--tab-content-padding:var(--ytd-margin-4x);box-sizing:border-box;contain:layout paint;display:block;overflow:auto;padding:var(--tab-content-padding);position:relative;width:100%}#right-tabs,.tab-content,.tab-content-cld{animation:none;transition:none}#right-tabs #emojis.ytd-commentbox{inset:auto 0 auto 0;width:auto}ytd-watch-flexy[is-two-columns_] #right-tabs .tab-content-cld{contain:size style;height:100%;position:absolute;width:100%}ytd-watch-flexy #right-tabs .tab-content-cld.tab-content-hidden{contain:size layout paint style;display:none;width:100%}@supports (color:var(--tabview-tab-btn-define )){ytd-watch-flexy #right-tabs .tab-btn{background:var(--yt-spec-general-background-a)}html{--tyt-tab-btn-flex-grow:1;--tyt-tab-btn-flex-basis:0%;--tyt-tab-bar-color-1-def:#ff4533;--tyt-tab-bar-color-2-def:var(--yt-sys-color-baseline--genai-4,var(--yt-sys-color-baseline--static-brand-red,var(--accent-color,var(--yt-brand-light-red))));--tyt-tab-bar-color-1:var(--main-color,var(--tyt-tab-bar-color-1-def));--tyt-tab-bar-color-2:var(--main-color,var(--tyt-tab-bar-color-2-def));--tyt-tab-text-primary:var(--yt-sys-color-baseline--text-primary,var(--yt-spec-text-primary));--tyt-tab-text-secondary:var(--yt-sys-color-baseline--text-secondary,var(--yt-spec-text-secondary))}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]{--tyt-tab-btn-color:var(--tyt-tab-text-secondary);background-color:var(--ytd-searchbox-legacy-button-color);border:0;border-bottom:4px solid transparent;color:var(--tyt-tab-btn-color);cursor:pointer;display:inline-block;flex-basis:0%;flex-basis:var(--tyt-tab-btn-flex-basis);flex-grow:1;flex-grow:var(--tyt-tab-btn-flex-grow);flex-shrink:1;font-size:12px;font-weight:500;line-height:18px;overflow:hidden;padding:14px 8px 10px;position:relative;text-align:center;text-decoration:none;text-overflow:clip;text-transform:uppercase;text-transform:var(--yt-button-text-transform,inherit);transition:border .2s linear .1s;white-space:nowrap}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]>svg{fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);color:var(--yt-button-color,inherit);height:18px;margin-right:0;opacity:.5;padding-right:0;vertical-align:bottom}ytd-watch-flexy #right-tabs .tab-btn{--tabview-btn-txt-ml:8px}ytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content=\"#tab-comments\"]{--tabview-btn-txt-ml:0px}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]>svg+span{margin-left:var(--tabview-btn-txt-ml)}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content] svg{pointer-events:none}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content].active{--tyt-tab-btn-color:var(--tyt-tab-text-primary);background-color:var(--ytd-searchbox-legacy-button-focus-color);border-bottom-color:var(--tyt-tab-bar-color-1);border-bottom:2px solid var(--tyt-tab-bar-color-2);font-weight:500;outline:0}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content].active svg{opacity:.9}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]:not(.active):hover{--tyt-tab-btn-color:var(--tyt-tab-text-primary);background-color:var(--ytd-searchbox-legacy-button-hover-color)}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]:not(.active):hover svg{opacity:.9}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]{user-select:none!important}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content].tab-btn-hidden{display:none}ytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content=\"#tab-comments\"],ytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content=\"#tab-comments\"]:hover{--tyt-tab-btn-color:var(--yt-sys-color-baseline--text-disabled,var(--yt-spec-text-disabled))}ytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content=\"#tab-comments\"] span#tyt-cm-count:empty{display:none}ytd-watch-flexy #right-tabs .tab-btn span#tyt-cm-count:empty:after{color:currentColor;display:inline-block;font-size:inherit;text-align:left;transform:scaleX(.8);width:4em}}@supports (color:var(--tyt-cm-count-define )){ytd-watch-flexy{--tyt-x-loading-content-letter-spacing:2px}html{--tabview-text-loading:\"Loading\";--tabview-text-fetching:\"Fetching\";--tabview-panel-loading:var(--tabview-text-loading)}html:lang(ja){--tabview-text-loading:\"読み込み中\";--tabview-text-fetching:\"フェッチ..\"}html:lang(ko){--tabview-text-loading:\"로딩..\";--tabview-text-fetching:\"가져오기..\"}html:lang(zh-Hant){--tabview-text-loading:\"載入中\";--tabview-text-fetching:\"擷取中\"}html:lang(zh-Hans){--tabview-text-loading:\"加载中\";--tabview-text-fetching:\"抓取中\"}html:lang(ru){--tabview-text-loading:\"Загрузка\";--tabview-text-fetching:\"Получение\"}ytd-watch-flexy #right-tabs .tab-btn span#tyt-cm-count:empty:after{content:var(--tabview-text-loading);letter-spacing:var(--tyt-x-loading-content-letter-spacing)}}@supports (color:var(--tabview-font-size-btn-define )){.font-size-right{align-content:space-evenly;bottom:0;display:inline-flex;flex-direction:column;justify-content:space-evenly;padding:4px 0;pointer-events:none;position:absolute;right:0;top:0;width:16px}html body ytd-watch-flexy.style-scope .font-size-btn{user-select:none!important}.font-size-btn{--tyt-font-size-btn-display:none;background-color:var(--yt-spec-badge-chip-background);box-sizing:border-box;color:var(--tyt-tab-text-secondary);cursor:pointer;display:var(--tyt-font-size-btn-display,none);font-family:Menlo,Lucida Console,Monaco,Consolas,monospace;font-weight:900;height:12px;line-height:100%;margin:0;padding:0;pointer-events:all;position:relative;transform-origin:left top;transition:background-color 90ms linear,color 90ms linear;width:12px}.font-size-btn:hover{background-color:var(--tyt-tab-text-primary);color:var(--yt-spec-general-background-a)}@supports (zoom:0.5){.tab-btn .font-size-btn{--tyt-font-size-btn-display:none}.tab-btn.active:hover .font-size-btn{--tyt-font-size-btn-display:inline-block}}}body ytd-watch-flexy:not([is-two-columns_]) #columns.ytd-watch-flexy{flex-direction:column}body ytd-watch-flexy:not([is-two-columns_]) #secondary.ytd-watch-flexy{box-sizing:border-box;display:block;width:100%}body ytd-watch-flexy:not([is-two-columns_]) #secondary.ytd-watch-flexy secondary-wrapper{contain:content;height:auto;padding-left:var(--ytd-margin-6x)}body ytd-watch-flexy:not([is-two-columns_]) #secondary.ytd-watch-flexy secondary-wrapper #right-tabs{overflow:auto}[tyt-chat=\"+\"]{--tyt-chat-grow:1}[tyt-chat=\"+\"] secondary-wrapper>[tyt-chat-container]{display:flex;flex-direction:column;flex-grow:var(--tyt-chat-grow);flex-shrink:0}[tyt-chat=\"+\"] secondary-wrapper>[tyt-chat-container]>#chat{flex-grow:var(--tyt-chat-grow)}ytd-watch-flexy[is-two-columns_]:not([theater]) #columns.style-scope.ytd-watch-flexy{min-height:calc(100vh - var(--ytd-toolbar-height, 56px))}ytd-watch-flexy[is-two-columns_]:not([full-bleed-player]) ytd-live-chat-frame#chat{height:auto!important;min-height:auto!important}ytd-watch-flexy[tyt-tab^=\"#\"]:not([is-two-columns_]):not([tyt-chat=\"+\"]) #right-tabs{min-height:var(--ytd-watch-flexy-chat-max-height)}body ytd-watch-flexy:not([is-two-columns_]) #chat.ytd-watch-flexy{margin-top:0}body ytd-watch-flexy:not([is-two-columns_]) ytd-watch-metadata.ytd-watch-flexy{margin-bottom:0}ytd-watch-metadata.ytd-watch-flexy ytd-metadata-row-container-renderer{display:none}#tab-info [show-expand-button] #expand-sizer.ytd-text-inline-expander{visibility:initial}#tab-info #collapse.button.ytd-text-inline-expander{display:none}#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>#left-arrow-container.ytd-video-description-infocards-section-renderer>#left-arrow,#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>#right-arrow-container.ytd-video-description-infocards-section-renderer>#right-arrow{border:6px solid transparent;opacity:.65}#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>#left-arrow-container.ytd-video-description-infocards-section-renderer>#left-arrow:hover,#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>#right-arrow-container.ytd-video-description-infocards-section-renderer>#right-arrow:hover{opacity:1}#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>div#left-arrow-container:before{background:transparent;content:\"\";display:block;height:40px;left:-20px;position:absolute;top:0;width:40px;z-index:-1}#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>div#right-arrow-container:before{background:transparent;content:\"\";display:block;height:40px;position:absolute;right:-20px;top:0;width:40px;z-index:-1}body ytd-watch-flexy[is-two-columns_][tyt-egm-panel_] #columns.style-scope.ytd-watch-flexy #panels.style-scope.ytd-watch-flexy{display:flex;flex-direction:column;flex-grow:1;flex-shrink:0}body ytd-watch-flexy[is-two-columns_][tyt-egm-panel_] #columns.style-scope.ytd-watch-flexy #panels.style-scope.ytd-watch-flexy ytd-engagement-panel-section-list-renderer[target-id][visibility=ENGAGEMENT_PANEL_VISIBILITY_EXPANDED]{display:flex;flex-direction:column;flex-grow:1;flex-shrink:0;height:0;max-height:none;min-height:auto}secondary-wrapper [visibility=ENGAGEMENT_PANEL_VISIBILITY_EXPANDED] #body.ytd-transcript-renderer:not(:empty),secondary-wrapper [visibility=ENGAGEMENT_PANEL_VISIBILITY_EXPANDED] #content.ytd-transcript-renderer:not(:empty),secondary-wrapper [visibility=ENGAGEMENT_PANEL_VISIBILITY_EXPANDED] ytd-transcript-renderer:not(:empty){flex-grow:1;height:auto;max-height:none;min-height:auto}secondary-wrapper #content.ytd-engagement-panel-section-list-renderer{position:relative}secondary-wrapper #content.ytd-engagement-panel-section-list-renderer>[panel-target-id]:only-child{contain:style size}secondary-wrapper #content.ytd-engagement-panel-section-list-renderer ytd-transcript-segment-list-renderer.ytd-transcript-search-panel-renderer{contain:strict;flex-grow:1}secondary-wrapper #content.ytd-engagement-panel-section-list-renderer ytd-transcript-segment-renderer.style-scope.ytd-transcript-segment-list-renderer,secondary-wrapper #content.ytd-engagement-panel-section-list-renderer ytd-transcript-segment-renderer.style-scope.ytd-transcript-segment-list-renderer>.segment{contain:layout paint style}body ytd-watch-flexy[theater] #secondary.ytd-watch-flexy{margin-top:var(--ytd-margin-3x);padding-top:0}body ytd-watch-flexy[theater] secondary-wrapper{margin-top:0;padding-top:0}body ytd-watch-flexy[theater] #chat.ytd-watch-flexy{margin-bottom:var(--ytd-margin-2x)}#tab-comments ytd-comments#comments [field-of-cm-count]{margin-top:0}#tab-info>ytd-expandable-video-description-body-renderer{margin-bottom:var(--ytd-margin-3x)}#tab-info [class]:last-child{margin-bottom:0;padding-bottom:0}#tab-info ytd-rich-metadata-row-renderer ytd-rich-metadata-renderer{max-width:none}ytd-watch-flexy[is-two-columns_] secondary-wrapper #chat.ytd-watch-flexy{margin-bottom:var(--ytd-margin-3x)}ytd-watch-flexy[tyt-tab] tp-yt-paper-tooltip{contain:content;white-space:nowrap}ytd-watch-info-text tp-yt-paper-tooltip.style-scope.ytd-watch-info-text{margin-bottom:-300px;margin-top:-96px}[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata{font-size:1.2rem;line-height:1.8rem}[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata yt-animated-rolling-number{font-size:inherit}[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata #info-container.style-scope.ytd-watch-info-text{align-items:center}ytd-watch-flexy[hide-default-text-inline-expander]{--tyt-bottom-watch-metadata-margin:6px}[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata>#description-inner.ytd-watch-metadata{margin:6px 12px}[hide-default-text-inline-expander] ytd-watch-metadata[title-headline-xs] h1.ytd-watch-metadata{font-size:1.8rem}ytd-watch-flexy[is-two-columns_][hide-default-text-inline-expander] #below.style-scope.ytd-watch-flexy ytd-merch-shelf-renderer{border:0;margin:0;padding:0}ytd-watch-flexy[is-two-columns_][hide-default-text-inline-expander] #below.style-scope.ytd-watch-flexy ytd-watch-metadata.ytd-watch-flexy{margin-bottom:6px}#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model--horizontal .yt-video-attribute-view-model__link-container .yt-video-attribute-view-model__hero-section{flex-shrink:0}#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model__overflow-menu{background:var(--yt-emoji-picker-category-background-color);border-radius:99px}#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model--image-square.yt-video-attribute-view-model--image-large .yt-video-attribute-view-model__hero-section{max-height:128px}#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model--image-large .yt-video-attribute-view-model__hero-section{max-width:128px}#tab-info ytd-reel-shelf-renderer #items.yt-horizontal-list-renderer ytd-reel-item-renderer.yt-horizontal-list-renderer{max-width:142px}ytd-watch-info-text#ytd-watch-info-text.style-scope.ytd-watch-metadata #date-text.style-scope.ytd-watch-info-text,ytd-watch-info-text#ytd-watch-info-text.style-scope.ytd-watch-metadata #view-count.style-scope.ytd-watch-info-text{align-items:center}ytd-watch-info-text:not([detailed]) #info.ytd-watch-info-text a.yt-simple-endpoint.yt-formatted-string{pointer-events:none}body ytd-app>ytd-popup-container>tp-yt-iron-dropdown>#contentWrapper>[slot=dropdown-content]{backdrop-filter:none}#tab-info [tyt-clone-refresh-count]{overflow:visible!important}#tab-info #items.ytd-horizontal-card-list-renderer yt-video-attribute-view-model.ytd-horizontal-card-list-renderer{contain:layout}#tab-info #thumbnail-container.ytd-structured-description-channel-lockup-renderer,#tab-info ytd-media-lockup-renderer[is-compact] #thumbnail-container.ytd-media-lockup-renderer{flex-shrink:0}secondary-wrapper ytd-donation-unavailable-renderer{--ytd-margin-6x:var(--ytd-margin-2x);--ytd-margin-5x:var(--ytd-margin-2x);--ytd-margin-4x:var(--ytd-margin-2x);--ytd-margin-3x:var(--ytd-margin-2x)}[tyt-no-less-btn] #less{display:none}.tyt-metadata-hover-resized #analytics-button,.tyt-metadata-hover-resized #purchase-button,.tyt-metadata-hover-resized #sponsor-button,.tyt-metadata-hover-resized #subscribe-button{display:none!important}.tyt-metadata-hover #upload-info{flex-basis:100vw;flex-shrink:0;max-width:max-content;min-width:max-content}#tab-info ytd-structured-description-playlist-lockup-renderer[collections] #playlist-thumbnail.style-scope.ytd-structured-description-playlist-lockup-renderer{max-width:100%}#tab-info ytd-structured-description-playlist-lockup-renderer[collections] #lockup-container.ytd-structured-description-playlist-lockup-renderer{padding:1px}#tab-info ytd-structured-description-playlist-lockup-renderer[collections] #thumbnail.ytd-structured-description-playlist-lockup-renderer{outline:1px solid hsla(0,0%,50%,.5)}ytd-live-chat-frame#chat[collapsed] ytd-message-renderer~#show-hide-button.ytd-live-chat-frame>ytd-toggle-button-renderer.ytd-live-chat-frame{padding:0}.tyt-info-invisible{display:none}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist{flex-grow:1;flex-shrink:1;max-height:unset!important;overflow:auto}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist>#container{max-height:unset!important}secondary-wrapper ytd-playlist-panel-renderer{--ytd-margin-6x:var(--ytd-margin-3x)}ytd-watch-flexy[theater] ytd-playlist-panel-renderer[collapsible][collapsed] .header.ytd-playlist-panel-renderer{padding:6px 8px}ytd-watch-flexy[theater] #playlist.ytd-watch-flexy{margin-bottom:var(--ytd-margin-2x)}ytd-watch-flexy[theater] #right-tabs .tab-btn[tyt-tab-content]{border-bottom:0 solid transparent;padding:8px 4px 6px}ytd-watch-flexy{--tyt-bottom-watch-metadata-margin:12px}ytd-watch-flexy[rounded-info-panel],ytd-watch-flexy[rounded-player-large]{--tyt-rounded-a1:${VAL_ROUNDED_A1}px}#bottom-row.style-scope.ytd-watch-metadata .item.ytd-watch-metadata{margin-right:var(--tyt-bottom-watch-metadata-margin,12px);margin-top:var(--tyt-bottom-watch-metadata-margin,12px)}#cinematics{contain:layout style size}body[data-ytlstm-theater-mode] #secondary-inner[class]>secondary-wrapper[class]:not(#chat-container):not(#chat){display:flex!important}body[data-ytlstm-theater-mode] secondary-wrapper{all:unset;height:100vh}body[data-ytlstm-theater-mode] #right-tabs{display:none}body[data-ytlstm-theater-mode] [data-ytlstm-chat-over-video] [tyt-chat=\"+\"]{--tyt-chat-grow:unset}body[data-ytlstm-theater-mode] [data-ytlstm-chat-over-video] #chat-container.style-scope,body[data-ytlstm-theater-mode] [data-ytlstm-chat-over-video] #columns.style-scope.ytd-watch-flexy,body[data-ytlstm-theater-mode] [data-ytlstm-chat-over-video] #secondary-inner.style-scope.ytd-watch-flexy,body[data-ytlstm-theater-mode] [data-ytlstm-chat-over-video] #secondary.style-scope.ytd-watch-flexy,body[data-ytlstm-theater-mode] [data-ytlstm-chat-over-video] [tyt-chat-container].style-scope,body[data-ytlstm-theater-mode] [data-ytlstm-chat-over-video] secondary-wrapper{pointer-events:none}body[data-ytlstm-theater-mode] [data-ytlstm-chat-over-video] #chat[class]{pointer-events:auto}@supports (color:var(--tyt-fix-20251124 )){#below ytd-watch-metadata .ytTextCarouselItemViewModelImageType{height:16px;width:16px}#below ytd-watch-metadata yt-text-carousel-item-view-model{column-gap:6px}#below ytd-watch-metadata ytd-watch-info-text#ytd-watch-info-text{font-size:inherit;line-height:inherit}}";

  var css_248z$1 = "[tyt-tab] #right-tabs #material-tabs,[tyt-tab^=\"#\"] #right-tabs #material-tabs{border-radius:12px 12px 0 0!important}ytd-watch-flexy #right-tabs .tab-content{border-radius:0 0 12px 12px!important}ytd-watch-flexy[is-two-columns_] #right-tabs .tab-content-cld{scrollbar-color:rgba(0,0,0,.25) transparent;scrollbar-width:thin}ytd-watch-flexy[is-two-columns_] #right-tabs .tab-content-cld::-webkit-scrollbar{width:4px}ytd-watch-flexy[is-two-columns_] #right-tabs .tab-content-cld::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.25);border-radius:4px}ytd-watch-flexy[is-two-columns_] #right-tabs .tab-content-cld::-webkit-scrollbar-track{background:transparent}";

  const VAL_ROUNDED_A1 = 12;
  const styles = {
    main: css_248z$2.replace("${VAL_ROUNDED_A1}", VAL_ROUNDED_A1) + css_248z$1
  };

  const StorageUtil = {
    keys: {
      youtube: {
        videoPlaySpeed: "yt/videoPlaySpeed",
        functionState: "yt/functionState_01",
        videoLoop: "py/videoLoop",
        theme: "yt/theme",
      }
    },
    getDefaultFunctionState: function() {
      return {
        isOpenCommentTable: true,
        isOpenAutoMiniPlayer: false,
        isOpenThemeProgressBar: true,
        isOpenSpeedControl: true,
        isOpenMarkOrRemoveAd: true
      };
    },
    getValue: function(key, defaultValue) {
      return GM_getValue(key, defaultValue);
    },
    setValue: function(key, value) {
      GM_setValue(key, value);
    }
  };

  /*!
   * table function
  * Project: https://github.com/Feiyt/youtube-improvements-layout-video-enhancer
   * @param {*} communicationKey
   * Optimize project structure to make it more reliable
   */
  const executionScript = (communicationKey, isOpenAutoMiniPlayer) => {
    const DEBUG_5084 = false;
    const DEBUG_5085 = false;
    const DEBUG_handleNavigateFactory = false;
    const TAB_AUTO_SWITCH_TO_COMMENTS = false;
    const autoMiniPlayerEnabled = !!isOpenAutoMiniPlayer;
    if (typeof trustedTypes !== "undefined" && trustedTypes.defaultPolicy === null) {
      let s = (s2) => s2;
      trustedTypes.createPolicy("default", { createHTML: s, createScriptURL: s, createScript: s });
    }
    const defaultPolicy = typeof trustedTypes !== "undefined" && trustedTypes.defaultPolicy || { createHTML: (s) => s };
    function createHTML(s) {
      return defaultPolicy.createHTML(s);
    }
    let trustHTMLErr = null;
    try {
      document.createElement("div").innerHTML = createHTML("1");
    } catch (e) {
      trustHTMLErr = e;
    }
    if (trustHTMLErr) {
      trustHTMLErr();
    }
    try {
      let getWord = function(tag) {
        return langWords[pageLang][tag] || langWords["en"][tag] || "";
      }, getTabsHTML = function() {
        const sTabBtnVideos = `${svgElm(16, 16, 90, 90, svgVideos)}<span>${getWord("videos")}</span>`;
        const sTabBtnInfo = `${svgElm(16, 16, 60, 60, svgInfo)}<span>${getWord("info")}</span>`;
        const sTabBtnPlayList = `${svgElm(16, 16, 20, 20, svgPlayList)}<span>${getWord("playlist")}</span>`;
        let str1 = `
        <paper-ripple class="style-scope yt-icon-button">
            <div id="background" class="style-scope paper-ripple" style="opacity:0;"></div>
            <div id="waves" class="style-scope paper-ripple"></div>
        </paper-ripple>
        `;
        let str_fbtns = `
    <div class="font-size-right">
    <div class="font-size-btn font-size-plus" tyt-di="8rdLQ">
    <svg width="12" height="12" viewbox="0 0 50 50" preserveAspectRatio="xMidYMid meet" 
    stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-size">
      <path d="M12 25H38M25 12V38"/>
    </svg>
    </div><div class="font-size-btn font-size-minus" tyt-di="8rdLQ">
    <svg width="12" height="12" viewbox="0 0 50 50" preserveAspectRatio="xMidYMid meet"
    stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-size">
      <path d="M12 25h26"/>
    </svg>
    </div>
    </div>
    `.replace(/[\r\n]+/g, "");
        const str_tabs = [
          `<a id="tab-btn1" tyt-di="q9Kjc" tyt-tab-content="#tab-info" class="tab-btn${(hiddenTabsByUserCSS & 1) === 1 ? " tab-btn-hidden" : ""}">${sTabBtnInfo}${str1}${str_fbtns}</a>`,
          `<a id="tab-btn3" tyt-di="q9Kjc" tyt-tab-content="#tab-comments" class="tab-btn${(hiddenTabsByUserCSS & 2) === 2 ? " tab-btn-hidden" : ""}">${svgElm(16, 16, 120, 120, svgComments)}<span id="tyt-cm-count"></span>${str1}${str_fbtns}</a>`,
          `<a id="tab-btn4" tyt-di="q9Kjc" tyt-tab-content="#tab-videos" class="tab-btn${(hiddenTabsByUserCSS & 4) === 4 ? " tab-btn-hidden" : ""}">${sTabBtnVideos}${str1}${str_fbtns}</a>`,
          `<a id="tab-btn5" tyt-di="q9Kjc" tyt-tab-content="#tab-list" class="tab-btn tab-btn-hidden">${sTabBtnPlayList}${str1}${str_fbtns}</a>`
        ].join("");
        let addHTML = `
        <div id="right-tabs">
            <tabview-view-pos-thead></tabview-view-pos-thead>
            <header>
                <div id="material-tabs">
                    ${str_tabs}
                </div>
            </header>
            <div class="tab-content">
                <div id="tab-info" class="tab-content-cld tab-content-hidden" tyt-hidden userscript-scrollbar-render></div>
                <div id="tab-comments" class="tab-content-cld tab-content-hidden" tyt-hidden userscript-scrollbar-render></div>
                <div id="tab-videos" class="tab-content-cld tab-content-hidden" tyt-hidden userscript-scrollbar-render></div>
                <div id="tab-list" class="tab-content-cld tab-content-hidden" tyt-hidden userscript-scrollbar-render></div>
            </div>
        </div>
        `;
        return addHTML;
      }, getLang = function() {
        let lang = "en";
        let htmlLang = ((document || 0).documentElement || 0).lang || "";
        switch (htmlLang) {
          case "en":
          case "en-GB":
            lang = "en";
            break;
          case "de":
          case "de-DE":
            lang = "du";
            break;
          case "fr":
          case "fr-CA":
          case "fr-FR":
            lang = "fr";
            break;
          case "zh-Hant":
          case "zh-Hant-HK":
          case "zh-Hant-TW":
            lang = "tw";
            break;
          case "zh-Hans":
          case "zh-Hans-CN":
            lang = "cn";
            break;
          case "ja":
          case "ja-JP":
            lang = "jp";
            break;
          case "ko":
          case "ko-KR":
            lang = "kr";
            break;
          case "ru":
          case "ru-RU":
            lang = "ru";
            break;
          default:
            lang = "en";
        }
        return lang;
      }, getLangForPage = function() {
        let lang = getLang();
        if (langWords[lang])
          pageLang = lang;
        else
          pageLang = "en";
      }, isTheater = function() {
        const ytdFlexyElm = elements.flexy;
        return ytdFlexyElm && ytdFlexyElm.hasAttribute000("theater");
      }, ytBtnSetTheater = function() {
        if (!isTheater()) {
          const sizeBtn = document.querySelector("ytd-watch-flexy #ytd-player button.ytp-size-button");
          if (sizeBtn)
            sizeBtn.click();
        }
      }, ytBtnCancelTheater = function() {
        if (isTheater()) {
          const sizeBtn = document.querySelector("ytd-watch-flexy #ytd-player button.ytp-size-button");
          if (sizeBtn)
            sizeBtn.click();
        }
      }, getSuitableElement = function(selector) {
        const elements2 = document.querySelectorAll(selector);
        let j = -1, h = -1;
        for (let i = 0, l = elements2.length; i < l; i++) {
          let d = elements2[i].getElementsByTagName("*").length;
          if (d > h) {
            h = d;
            j = i;
          }
        }
        return j >= 0 ? elements2[j] : null;
      }, ytBtnExpandChat = function() {
        const dom = getSuitableElement("ytd-live-chat-frame#chat");
        const cnt = insp(dom);
        if (cnt && typeof cnt.collapsed === "boolean") {
          if (typeof cnt.setCollapsedState === "function") {
            cnt.setCollapsedState({
              setLiveChatCollapsedStateAction: {
                collapsed: false
              }
            });
            if (cnt.collapsed === false)
              return;
          }
          cnt.collapsed = false;
          if (cnt.collapsed === false)
            return;
          if (cnt.isHiddenByUser === true && cnt.collapsed === true) {
            cnt.isHiddenByUser = false;
            cnt.collapsed = false;
          }
        }
        let button = document.querySelector("ytd-live-chat-frame#chat[collapsed] > .ytd-live-chat-frame#show-hide-button");
        if (button) {
          button = button.querySelector000("div.yt-spec-touch-feedback-shape") || button.querySelector000("ytd-toggle-button-renderer");
          if (button)
            button.click();
        }
      }, ytBtnCollapseChat = function() {
        const dom = getSuitableElement("ytd-live-chat-frame#chat");
        const cnt = insp(dom);
        if (cnt && typeof cnt.collapsed === "boolean") {
          if (typeof cnt.setCollapsedState === "function") {
            cnt.setCollapsedState({
              setLiveChatCollapsedStateAction: {
                collapsed: true
              }
            });
            if (cnt.collapsed === true)
              return;
          }
          cnt.collapsed = true;
          if (cnt.collapsed === true)
            return;
          if (cnt.isHiddenByUser === false && cnt.collapsed === false) {
            cnt.isHiddenByUser = true;
            cnt.collapsed = true;
          }
        }
        let button = document.querySelector("ytd-live-chat-frame#chat:not([collapsed]) > .ytd-live-chat-frame#show-hide-button");
        if (button) {
          button = button.querySelector000("div.yt-spec-touch-feedback-shape") || button.querySelector000("ytd-toggle-button-renderer");
          if (button)
            button.click();
        }
      }, ytBtnEgmPanelCore = function(arr) {
        if (!arr)
          return;
        if (!("length" in arr))
          arr = [arr];
        const ytdFlexyElm = elements.flexy;
        if (!ytdFlexyElm)
          return;
        let actions = [];
        for (const entry of arr) {
          if (!entry)
            continue;
          let panelId = entry.panelId;
          let toHide = entry.toHide;
          let toShow = entry.toShow;
          if (toHide === true && !toShow) {
            actions.push({
              "hideEngagementPanelEndpoint": {
                "panelIdentifier": panelId
              }
            });
          } else if (toShow === true && !toHide) {
            actions.push({
              "showEngagementPanelEndpoint": {
                "panelIdentifier": panelId
              }
            });
          }
        }
        if (actions.length > 0) {
          const cnt = insp(ytdFlexyElm);
          cnt.resolveCommand(
            {
              "signalServiceEndpoint": {
                "signal": "CLIENT_SIGNAL",
                "actions": actions
              }
            },
            {},
            false
          );
        }
        actions = null;
      }, getPanelIdentifier = function(panelElm) {
        const cnt = insp(panelElm);
        const panelIdentifier = (cnt.data || 0).panelIdentifier;
        if (panelIdentifier && typeof panelIdentifier === "string") {
          return panelIdentifier;
        }
        const tag = ((cnt.data || 0).identifier || 0).tag;
        if (tag && typeof tag === "string") {
          return tag;
        }
        const targetId = (cnt.data || 0).targetId;
        if (targetId && typeof targetId === "string") {
          return targetId;
        }
        const id = panelElm.getAttribute000("target-id") || "";
        return id;
      }, ytBtnCloseEngagementPanels = function() {
        const actions = [];
        for (const panelElm of document.querySelectorAll(
          `ytd-watch-flexy[tyt-tab] #panels.ytd-watch-flexy ytd-engagement-panel-section-list-renderer[target-id][visibility]:not([hidden])`
        )) {
          if (panelElm.getAttribute("visibility") == "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED" && !panelElm.closest("[hidden]")) {
            const pid = getPanelIdentifier(panelElm);
            actions.push({
              panelId: pid,
              toHide: true
            });
          }
        }
        ytBtnEgmPanelCore(actions);
      }, ytBtnOpenPlaylist = function() {
        const cnt = insp(elements.playlist);
        if (cnt && typeof cnt.collapsed === "boolean") {
          cnt.collapsed = false;
        }
      }, ytBtnClosePlaylist = function() {
        const cnt = insp(elements.playlist);
        if (cnt && typeof cnt.collapsed === "boolean") {
          cnt.collapsed = true;
        }
      };
      let executionFinished = 0;
      if (typeof CustomElementRegistry === "undefined")
        return;
      if (CustomElementRegistry.prototype.define000)
        return;
      if (typeof CustomElementRegistry.prototype.define !== "function")
        return;
      const HTMLElement_ = HTMLElement.prototype.constructor;
      const qsOne = (elm, selector) => {
        return HTMLElement_.prototype.querySelector.call(elm, selector);
      };
      const qsAll = (elm, selector) => {
        return HTMLElement_.prototype.querySelectorAll.call(elm, selector);
      };
      const defineProperties = (p, o) => {
        if (!p) {
          return;
        }
        for (const k of Object.keys(o)) {
          if (!o[k]) {
            delete o[k];
          }
        }
        return Object.defineProperties(p, o);
      };
      const replaceChildrenPolyfill = function replaceChildren(...new_children) {
        let el = this.firstChild;
        while (el) {
          const next = el.nextSibling;
          el.remove();
          el = next;
        }
        this.append(...new_children);
      };
      const pdsBaseDF = Object.getOwnPropertyDescriptors(DocumentFragment.prototype);
      if (pdsBaseDF.replaceChildren) {
        defineProperties(DocumentFragment.prototype, {
          replaceChildren000: pdsBaseDF.replaceChildren
        });
      } else {
        DocumentFragment.prototype.replaceChildren000 = replaceChildrenPolyfill;
      }
      const pdsBaseNode = Object.getOwnPropertyDescriptors(Node.prototype);
      if (!pdsBaseNode.appendChild000 && !pdsBaseNode.insertBefore000) {
        defineProperties(Node.prototype, {
          appendChild000: pdsBaseNode.appendChild,
          insertBefore000: pdsBaseNode.insertBefore
        });
      }
      const pdsBaseElement = Object.getOwnPropertyDescriptors(Element.prototype);
      if (!pdsBaseElement.setAttribute000 && !pdsBaseElement.querySelector000) {
        const nPdsElement = {
          setAttribute000: pdsBaseElement.setAttribute,
          getAttribute000: pdsBaseElement.getAttribute,
          hasAttribute000: pdsBaseElement.hasAttribute,
          removeAttribute000: pdsBaseElement.removeAttribute,
          querySelector000: pdsBaseElement.querySelector
        };
        if (pdsBaseElement.replaceChildren) {
          nPdsElement.replaceChildren000 = pdsBaseElement.replaceChildren;
        } else {
          Element.prototype.replaceChildren000 = replaceChildrenPolyfill;
        }
        defineProperties(Element.prototype, nPdsElement);
      }
      Element.prototype.setAttribute111 = function(p, v) {
        v = `${v}`;
        if (this.getAttribute000(p) === v)
          return;
        this.setAttribute000(p, v);
      };
      Element.prototype.incAttribute111 = function(p) {
        let v = +this.getAttribute000(p) || 0;
        v = v > 1e9 ? v + 1 : 9;
        this.setAttribute000(p, `${v}`);
        return v;
      };
      Element.prototype.assignChildren111 = function(previousSiblings, node, nextSiblings) {
        let nodeList = [];
        for (let t = this.firstChild; t instanceof Node; t = t.nextSibling) {
          if (t === node)
            continue;
          nodeList.push(t);
        }
        inPageRearrange = true;
        if (node.parentNode === this) {
          let fm = new DocumentFragment();
          if (nodeList.length > 0) {
            fm.replaceChildren000(...nodeList);
          }
          if (previousSiblings && previousSiblings.length > 0) {
            fm.replaceChildren000(...previousSiblings);
            this.insertBefore000(fm, node);
          }
          if (nextSiblings && nextSiblings.length > 0) {
            fm.replaceChildren000(...nextSiblings);
            this.appendChild000(fm);
          }
          fm.replaceChildren000();
          fm = null;
        } else {
          if (!previousSiblings)
            previousSiblings = [];
          if (!nextSiblings)
            nextSiblings = [];
          this.replaceChildren000(...previousSiblings, node, ...nextSiblings);
        }
        inPageRearrange = false;
        if (nodeList.length > 0) {
          for (const t of nodeList) {
            if (t instanceof Element && t.isConnected === false)
              t.remove();
          }
        }
        nodeList.length = 0;
        nodeList = null;
      };
      let secondaryInnerHold = 0;
      const secondaryInnerFn = (cb) => {
        if (secondaryInnerHold) {
          secondaryInnerHold++;
          let err, r;
          try {
            r = cb();
          } catch (e) {
            err = e;
          }
          secondaryInnerHold--;
          if (err)
            throw err;
          return r;
        } else {
          const ea = document.querySelector("#secondary-inner");
          const eb = document.querySelector("secondary-wrapper#secondary-inner-wrapper");
          if (ea && eb) {
            secondaryInnerHold++;
            let err, r;
            ea.id = "secondary-inner-";
            eb.id = "secondary-inner";
            try {
              r = cb();
            } catch (e) {
              err = e;
            }
            ea.id = "secondary-inner";
            eb.id = "secondary-inner-wrapper";
            secondaryInnerHold--;
            if (err)
              throw err;
            return r;
          } else {
            return cb();
          }
        }
      };
      const DISABLE_FLAGS_SHADYDOM_FREE = true;
      (() => {
        let e = "undefined" != typeof unsafeWindow ? unsafeWindow : void 0 instanceof Window ? void 0 : window;
        if (!e._ytConfigHacks) {
          let r = function(t2) {
            o(), t2 && e.removeEventListener("DOMContentLoaded", r, false);
          };
          let t = 4;
          class n extends Set {
            add(e2) {
              if (t <= 0)
                return void 0;
              "function" == typeof e2 && super.add(e2);
            }
          }
          let a = (async () => {
          })().constructor, i = e._ytConfigHacks = new n(), l = () => {
            let t2 = e.ytcsi.originalYtcsi;
            t2 && (e.ytcsi = t2, l = null);
          }, c = null, o = () => {
            if (t >= 1) {
              let n2 = (e.yt || 0).config_ || (e.ytcfg || 0).data_ || 0;
              if ("string" == typeof n2.INNERTUBE_API_KEY && "object" == typeof n2.EXPERIMENT_FLAGS)
                for (let a2 of (--t <= 0 && l && l(), c = true, i))
                  a2(n2);
            }
          }, f = 1, d = (t2) => {
            if (t2 = t2 || e.ytcsi)
              return e.ytcsi = new Proxy(t2, { get: (e2, t3, n2) => "originalYtcsi" === t3 ? e2 : (o(), c && --f <= 0 && l && l(), e2[t3]) }), true;
          };
          d() || Object.defineProperty(e, "ytcsi", {
            get() {
            },
            set: (t2) => (t2 && (delete e.ytcsi, d(t2)), true),
            enumerable: false,
            configurable: true
          });
          let { addEventListener: s, removeEventListener: y } = Document.prototype;
          new a((e2) => {
            if ("undefined" != typeof AbortSignal)
              s.call(
                document,
                "yt-page-data-fetched",
                e2,
                { once: true }
              ), s.call(document, "yt-navigate-finish", e2, { once: true }), s.call(
                document,
                "spfdone",
                e2,
                { once: true }
              );
            else {
              let t2 = () => {
                e2(), y.call(document, "yt-page-data-fetched", t2, false), y.call(document, "yt-navigate-finish", t2, false), y.call(document, "spfdone", t2, false);
              };
              s.call(document, "yt-page-data-fetched", t2, false), s.call(document, "yt-navigate-finish", t2, false), s.call(document, "spfdone", t2, false);
            }
          }).then(o), new a((e2) => {
            if ("undefined" != typeof AbortSignal)
              s.call(
                document,
                "yt-action",
                e2,
                { once: true, capture: true }
              );
            else {
              let t2 = () => {
                e2(), y.call(document, "yt-action", t2, true);
              };
              s.call(document, "yt-action", t2, true);
            }
          }).then(o), a.resolve().then(() => {
            "loading" !== document.readyState ? r() : e.addEventListener("DOMContentLoaded", r, false);
          });
        }
      })();
      let configOnce = false;
      window._ytConfigHacks.add((config_) => {
        if (configOnce)
          return;
        configOnce = true;
        const EXPERIMENT_FLAGS = config_.EXPERIMENT_FLAGS || 0;
        const EXPERIMENTS_FORCED_FLAGS = config_.EXPERIMENTS_FORCED_FLAGS || 0;
        for (const flags of [EXPERIMENT_FLAGS, EXPERIMENTS_FORCED_FLAGS]) {
          if (flags) {
            flags.web_watch_chat_hide_button_killswitch = false;
            flags.web_watch_theater_chat = false;
            flags.suppress_error_204_logging = true;
            flags.kevlar_watch_grid = false;
            if (DISABLE_FLAGS_SHADYDOM_FREE) {
              flags.enable_shadydom_free_scoped_node_methods = false;
              flags.enable_shadydom_free_scoped_query_methods = false;
              flags.enable_shadydom_free_scoped_readonly_properties_batch_one = false;
              flags.enable_shadydom_free_parent_node = false;
              flags.enable_shadydom_free_children = false;
              flags.enable_shadydom_free_last_child = false;
            }
          }
        }
      });
      const mWeakRef = typeof WeakRef === "function" ? (o) => o ? new WeakRef(o) : null : (o) => o || null;
      const kRef = (wr) => wr && wr.deref ? wr.deref() : wr;
      const Promise = (async () => {
      })().constructor;
      const delayPn = (delay) => new Promise((fn) => setTimeout(fn, delay));
      const insp = (o) => o ? o.polymerController || o.inst || o || 0 : o || 0;
      const setTimeout_ = setTimeout.bind(window);
      const PromiseExternal = ((resolve_, reject_) => {
        const h = (resolve, reject) => {
          resolve_ = resolve;
          reject_ = reject;
        };
        return class PromiseExternal extends Promise {
          constructor(cb = h) {
            super(cb);
            if (cb === h) {
              this.resolve = resolve_;
              this.reject = reject_;
            }
          }
        };
      })();
      var nextBrowserTick = void 0 !== nextBrowserTick && nextBrowserTick.version >= 2 ? nextBrowserTick : (() => {
        "use strict";
        const e = "undefined" != typeof self ? self : "undefined" != typeof global ? global : void 0;
        let t = true;
        if (!function n2(s2) {
          return s2 ? t = false : e.postMessage && !e.importScripts && e.addEventListener ? (e.addEventListener("message", n2, false), e.postMessage("$$", "*"), e.removeEventListener("message", n2, false), t) : void 0;
        }())
          return void 0;
        const n = (async () => {
        })().constructor;
        let s = null;
        const o = /* @__PURE__ */ new Map(), { floor: r, random: i } = Math;
        let l;
        do {
          l = `$nextBrowserTick$${(i() + 8).toString().slice(2)}$`;
        } while (l in e);
        const a = l, c = a.length + 9;
        e[a] = 1;
        e.addEventListener("message", (e2) => {
          if (0 !== o.size) {
            const t2 = (e2 || 0).data;
            if ("string" == typeof t2 && t2.length === c && e2.source === (e2.target || 1)) {
              const e3 = o.get(t2);
              e3 && ("p" === t2[0] && (s = null), o.delete(t2), e3());
            }
          }
        }, false);
        const d = (t2 = o) => {
          if (t2 === o) {
            if (s)
              return s;
            let t3;
            do {
              t3 = `p${a}${r(314159265359 * i() + 314159265359).toString(36)}`;
            } while (o.has(t3));
            return s = new n((e2) => {
              o.set(t3, e2);
            }), e.postMessage(t3, "*"), t3 = null, s;
          }
          {
            let n2;
            do {
              n2 = `f${a}${r(314159265359 * i() + 314159265359).toString(36)}`;
            } while (o.has(n2));
            o.set(n2, t2), e.postMessage(n2, "*");
          }
        };
        return d.version = 2, d;
      })();
      const isPassiveArgSupport = typeof IntersectionObserver === "function";
      const bubblePassive = isPassiveArgSupport ? { capture: false, passive: true } : false;
      const capturePassive = isPassiveArgSupport ? { capture: true, passive: true } : true;
      class Attributer {
        constructor(list) {
          this.list = list;
          this.flag = 0;
        }
        makeString() {
          let k = 1;
          let s = "";
          let i = 0;
          while (this.flag >= k) {
            if (this.flag & k) {
              s += this.list[i];
            }
            i++;
            k <<= 1;
          }
          return s;
        }
      }
      const mLoaded = new Attributer("icp");
      if (document.documentElement) {
        mLoaded.flag |= 7;
        document.documentElement.setAttribute111("tabview-loaded", mLoaded.makeString());
      }
      const wrSelfMap = /* @__PURE__ */ new WeakMap();
      const elements = new Proxy({
        related: null,
        comments: null,
        infoExpander: null
      }, {
        get(target, prop) {
          return kRef(target[prop]);
        },
        set(target, prop, value) {
          if (value) {
            let wr = wrSelfMap.get(value);
            if (!wr) {
              wr = mWeakRef(value);
              wrSelfMap.set(value, wr);
            }
            target[prop] = wr;
          } else {
            target[prop] = null;
          }
          return true;
        }
      });
      const getMainInfo = () => {
        const infoExpander = elements.infoExpander;
        if (!infoExpander)
          return null;
        const mainInfo = infoExpander.matches("[tyt-main-info]") ? infoExpander : infoExpander.querySelector000("[tyt-main-info]");
        return mainInfo || null;
      };
      const asyncWrap = (asyncFn) => {
        return () => {
          Promise.resolve().then(asyncFn);
        };
      };
      const deferAfterFirstPaint = (fn) => {
        if (typeof requestAnimationFrame === "function") {
          requestAnimationFrame(() => setTimeout(fn, 0));
        } else {
          setTimeout(fn, 0);
        }
      };
      let pageType = null;
      let pageLang = "en";
      const langWords = {
        "en": {
          "info": "Info",
          "videos": "Videos",
          "playlist": "Playlist"
        },
        "jp": {
          "info": "情報",
          "videos": "動画",
          "playlist": "再生リスト"
        },
        "tw": {
          "info": "資訊",
          "videos": "影片",
          "playlist": "播放清單"
        },
        "cn": {
          "info": "资讯",
          "videos": "视频",
          "playlist": "播放列表"
        },
        "du": {
          "info": "Info",
          "videos": "Videos",
          "playlist": "Playlist"
        },
        "fr": {
          "info": "Info",
          "videos": "Vidéos",
          "playlist": "Playlist"
        },
        "kr": {
          "info": "정보",
          "videos": "동영상",
          "playlist": "재생목록"
        },
        "ru": {
          "info": "Описание",
          "videos": "Видео",
          "playlist": "Плейлист"
        }
      };
      const svgComments = `<path d="M80 27H12A12 12 90 0 0 0 39v42a12 12 90 0 0 12 12h12v20a2 2 90 0 0 3.4 2L47 93h33a12 
  12 90 0 0 12-12V39a12 12 90 0 0-12-12zM20 47h26a2 2 90 1 1 0 4H20a2 2 90 1 1 0-4zm52 28H20a2 2 90 1 1 0-4h52a2 2 90 
  1 1 0 4zm0-12H20a2 2 90 1 1 0-4h52a2 2 90 1 1 0 4zm36-58H40a12 12 90 0 0-12 12v6h52c9 0 16 7 16 16v42h0v4l7 7a2 2 90 
  0 0 3-1V71h2a12 12 90 0 0 12-12V17a12 12 90 0 0-12-12z"/>`.trim();
      const svgVideos = `<path d="M89 10c0-4-3-7-7-7H7c-4 0-7 3-7 7v70c0 4 3 7 7 7h75c4 0 7-3 7-7V10zm-62 2h13v10H27V12zm-9 
  66H9V68h9v10zm0-56H9V12h9v10zm22 56H27V68h13v10zm-3-25V36c0-2 2-3 4-2l12 8c2 1 2 4 0 5l-12 8c-2 1-4 0-4-2zm25 
  25H49V68h13v10zm0-56H49V12h13v10zm18 56h-9V68h9v10zm0-56h-9V12h9v10z"/>`.trim();
      const svgInfo = `<path d="M30 0C13.3 0 0 13.3 0 30s13.3 30 30 30 30-13.3 30-30S46.7 0 30 0zm6.2 46.6c-1.5.5-2.6 
  1-3.6 1.3a10.9 10.9 0 0 1-3.3.5c-1.7 0-3.3-.5-4.3-1.4a4.68 4.68 0 0 1-1.6-3.6c0-.4.2-1 .2-1.5a20.9 20.9 90 0 1 
  .3-2l2-6.8c.1-.7.3-1.3.4-1.9a8.2 8.2 90 0 0 .3-1.6c0-.8-.3-1.4-.7-1.8s-1-.5-2-.5a4.53 4.53 0 0 0-1.6.3c-.5.2-1 
  .2-1.3.4l.6-2.1c1.2-.5 2.4-1 3.5-1.3s2.3-.6 3.3-.6c1.9 0 3.3.6 4.3 1.3s1.5 2.1 1.5 3.5c0 .3 0 .9-.1 1.6a10.4 10.4 
  90 0 1-.4 2.2l-1.9 6.7c-.2.5-.2 1.1-.4 1.8s-.2 1.3-.2 1.6c0 .9.2 1.6.6 1.9s1.1.5 2.1.5a6.1 6.1 90 0 0 1.5-.3 9 9 90 
  0 0 1.4-.4l-.6 2.2zm-3.8-35.2a1 1 0 010 8.6 1 1 0 010-8.6z"/>`.trim();
      const svgPlayList = `<path d="M0 3h12v2H0zm0 4h12v2H0zm0 4h8v2H0zm16 0V7h-2v4h-4v2h4v4h2v-4h4v-2z"/>`.trim();
      const svgDiag1 = `<svg stroke="currentColor" fill="none"><path d="M8 2h2v2M7 5l3-3m-6 8H2V8m0 2l3-3"/></svg>`;
      const svgDiag2 = `<svg stroke="currentColor" fill="none"><path d="M7 3v2h2M7 5l3-3M5 9V7H3m-1 3l3-3"/></svg>`;
      const getGMT = () => {
        let m = new Date("2023-01-01T00:00:00Z");
        return m.getDate() === 1 ? `+${m.getHours()}` : `-${24 - m.getHours()}`;
      };
      const svgElm = (w, h, vw, vh, p, m) => `<svg${m ? ` class=${m}` : ""} width="${w}" height="${h}" viewBox="0 0 ${vw} ${vh}" preserveAspectRatio="xMidYMid meet">${p}</svg>`;
      let hiddenTabsByUserCSS = 0;
      const _locks = {};
      const lockGet = new Proxy(
        _locks,
        {
          get(target, prop) {
            return target[prop] || 0;
          },
          set(target, prop, val) {
            return true;
          }
        }
      );
      const lockSet = new Proxy(
        _locks,
        {
          get(target, prop) {
            if (target[prop] > 1e9)
              target[prop] = 9;
            return target[prop] = (target[prop] || 0) + 1;
          },
          set(target, prop, val) {
            return true;
          }
        }
      );
      const videosElementProvidedPromise = new PromiseExternal();
      const navigateFinishedPromise = new PromiseExternal();
      let isRightTabsInserted = false;
      const rightTabsProvidedPromise = new PromiseExternal();
      const infoExpanderElementProvidedPromise = new PromiseExternal();
      const pluginsDetected = {};
      const pluginDetectObserver = new MutationObserver((mutations) => {
        let changeOnRoot = false;
        let newPlugins = [];
        const attributeChangedSet = /* @__PURE__ */ new Set();
        for (const mutation of mutations) {
          if (mutation.target === document)
            changeOnRoot = true;
          let detected = "";
          switch (mutation.attributeName) {
            case "data-ytlstm-new-layout":
            case "data-ytlstm-overlay-text-shadow":
            case "data-ytlstm-theater-mode":
              detected = "external.ytlstm";
              attributeChangedSet.add(detected);
              break;
          }
          if (detected && !pluginsDetected[detected]) {
            pluginsDetected[detected] = true;
            newPlugins.push(detected);
          }
        }
        if (elements.flexy && attributeChangedSet.has("external.ytlstm")) {
          elements.flexy.setAttribute(
            "tyt-external-ytlstm",
            document.querySelector("[data-ytlstm-theater-mode]") ? "1" : "0"
          );
        }
        if (changeOnRoot) {
          pluginDetectObserver.observe(document.body, { attributes: true });
        }
        for (const detected of newPlugins) {
          const pluginItem = plugin[`${detected}`];
          if (pluginItem) {
            pluginItem.activate();
          } else {
          }
        }
      });
      pluginDetectObserver.observe(document.documentElement, { attributes: true });
      if (document.body)
        pluginDetectObserver.observe(document.body, { attributes: true });
      navigateFinishedPromise.then(() => {
        pluginDetectObserver.observe(document.documentElement, { attributes: true });
        if (document.body)
          pluginDetectObserver.observe(document.body, { attributes: true });
      });
      const funcCanCollapse = function(s) {
        const content = this.content || this.$.content;
        this.canToggle = this.shouldUseNumberOfLines && (this.alwaysCollapsed || this.collapsed || this.isToggled === false) ? this.alwaysToggleable || this.isToggled || content && content.offsetHeight < content.scrollHeight : this.alwaysToggleable || this.isToggled || content && content.scrollHeight > this.collapsedHeight;
      };
      const aoChatAttrChangeFn = async (lockId) => {
        if (lockGet["aoChatAttrAsyncLock"] !== lockId)
          return;
        const chatElm = elements.chat;
        const ytdFlexyElm = elements.flexy;
        if (chatElm && ytdFlexyElm) {
          const isChatCollapsed = chatElm.hasAttribute000("collapsed");
          if (isChatCollapsed) {
            ytdFlexyElm.setAttribute111("tyt-chat-collapsed", "");
          } else {
            ytdFlexyElm.removeAttribute000("tyt-chat-collapsed");
          }
          ytdFlexyElm.setAttribute111("tyt-chat", isChatCollapsed ? "-" : "+");
        }
      };
      const aoPlayListAttrChangeFn = async (lockId) => {
        if (lockGet["aoPlayListAttrAsyncLock"] !== lockId)
          return;
        const playlistElm = elements.playlist;
        const ytdFlexyElm = elements.flexy;
        let doAttributeChange = 0;
        if (playlistElm && ytdFlexyElm) {
          if (playlistElm.closest("[hidden]")) {
            doAttributeChange = 2;
          } else if (playlistElm.hasAttribute000("collapsed")) {
            doAttributeChange = 2;
          } else {
            doAttributeChange = 1;
          }
        } else if (ytdFlexyElm) {
          doAttributeChange = 2;
        }
        if (doAttributeChange === 1) {
          if (ytdFlexyElm.getAttribute000("tyt-playlist-expanded") !== "") {
            ytdFlexyElm.setAttribute111("tyt-playlist-expanded", "");
          }
        } else if (doAttributeChange === 2) {
          if (ytdFlexyElm.hasAttribute000("tyt-playlist-expanded")) {
            ytdFlexyElm.removeAttribute000("tyt-playlist-expanded");
          }
        }
      };
      const aoChat = new MutationObserver(() => {
        Promise.resolve(lockSet["aoChatAttrAsyncLock"]).then(aoChatAttrChangeFn).catch(console.warn);
      });
      const aoPlayList = new MutationObserver(() => {
        Promise.resolve(lockSet["aoPlayListAttrAsyncLock"]).then(aoPlayListAttrChangeFn).catch(console.warn);
      });
      const aoComment = new MutationObserver(async (mutations) => {
        const commentsArea = elements.comments;
        const ytdFlexyElm = elements.flexy;
        if (!commentsArea)
          return;
        let bfHidden = false;
        let bfCommentsVideoId = false;
        let bfCommentDisabled = false;
        for (const mutation of mutations) {
          if (mutation.attributeName === "hidden" && mutation.target === commentsArea) {
            bfHidden = true;
          } else if (mutation.attributeName === "tyt-comments-video-id" && mutation.target === commentsArea) {
            bfCommentsVideoId = true;
          } else if (mutation.attributeName === "tyt-comments-data-status" && mutation.target === commentsArea) {
            bfCommentDisabled = true;
          }
        }
        if (bfHidden) {
          if (!commentsArea.hasAttribute000("hidden")) {
            Promise.resolve(commentsArea).then(eventMap["settingCommentsVideoId"]).catch(console.warn);
          }
          Promise.resolve(lockSet["removeKeepCommentsScrollerLock"]).then(removeKeepCommentsScroller).catch(console.warn);
        }
        if ((bfHidden || bfCommentsVideoId || bfCommentDisabled) && ytdFlexyElm) {
          const commentsDataStatus = +commentsArea.getAttribute000("tyt-comments-data-status");
          if (commentsDataStatus === 2) {
            ytdFlexyElm.setAttribute111("tyt-comment-disabled", "");
          } else if (commentsDataStatus === 1) {
            ytdFlexyElm.removeAttribute000("tyt-comment-disabled");
          }
          Promise.resolve(lockSet["checkCommentsShouldBeHiddenLock"]).then(eventMap["checkCommentsShouldBeHidden"]).catch(console.warn);
          const lockId = lockSet["rightTabReadyLock01"];
          await rightTabsProvidedPromise.then();
          if (lockGet["rightTabReadyLock01"] !== lockId)
            return;
          if (elements.comments !== commentsArea)
            return;
          if (commentsArea.isConnected === false)
            return;
          if (commentsArea.closest("#tab-comments")) {
            const shouldTabVisible = !commentsArea.closest("[hidden]");
            document.querySelector('[tyt-tab-content="#tab-comments"]').classList.toggle("tab-btn-hidden", !shouldTabVisible);
          }
        }
      });
      const ioComment = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const target = entry.target;
          const cnt = insp(target);
          if (entry.isIntersecting && target instanceof HTMLElement_ && typeof cnt.calculateCanCollapse === "function") {
            lockSet["removeKeepCommentsScrollerLock"];
            cnt.calculateCanCollapse(true);
            target.setAttribute111("io-intersected", "");
            const ytdFlexyElm = elements.flexy;
            if (ytdFlexyElm && !ytdFlexyElm.hasAttribute000("keep-comments-scroller")) {
              ytdFlexyElm.setAttribute111("keep-comments-scroller", "");
            }
          } else if (target.hasAttribute000("io-intersected")) {
            target.removeAttribute000("io-intersected");
          }
        }
      }, {
        threshold: [0],
        rootMargin: "32px"
      });
      let bFixForResizedTabLater = false;
      let lastRoRightTabsWidth = 0;
      const roRightTabs = new ResizeObserver((entries) => {
        const entry = entries[entries.length - 1];
        const width = Math.round(entry.borderBoxSize.inlineSize);
        if (lastRoRightTabsWidth !== width) {
          lastRoRightTabsWidth = width;
          if ((tabAStatus & 2) === 2) {
            bFixForResizedTabLater = false;
            Promise.resolve(1).then(eventMap["fixForTabDisplay"]);
          } else {
            bFixForResizedTabLater = true;
          }
        }
      });
      const switchToTab = (activeLink) => {
        if (typeof activeLink === "string") {
          activeLink = document.querySelector(`a[tyt-tab-content="${activeLink}"]`) || null;
        }
        const ytdFlexyElm = elements.flexy;
        const links = document.querySelectorAll("#material-tabs a[tyt-tab-content]");
        for (const link of links) {
          const content = document.querySelector(link.getAttribute000("tyt-tab-content"));
          if (link && content) {
            if (link !== activeLink) {
              link.classList.remove("active");
              content.classList.add("tab-content-hidden");
              if (!content.hasAttribute000("tyt-hidden")) {
                content.setAttribute111("tyt-hidden", "");
              }
            } else {
              link.classList.add("active");
              if (content.hasAttribute000("tyt-hidden")) {
                content.removeAttribute000("tyt-hidden");
              }
              content.classList.remove("tab-content-hidden");
            }
          }
        }
        const switchingTo = activeLink ? activeLink.getAttribute000("tyt-tab-content") : "";
        if (switchingTo) {
          lastTab = lastPanel = switchingTo;
        }
        if (ytdFlexyElm.getAttribute000("tyt-chat") === "")
          ytdFlexyElm.removeAttribute000("tyt-chat");
        ytdFlexyElm.setAttribute111("tyt-tab", switchingTo);
        if (switchingTo) {
          bFixForResizedTabLater = false;
          Promise.resolve(0).then(eventMap["fixForTabDisplay"]);
        }
      };
      let tabAStatus = 0;
      const calculationFn = (r = 0, flag) => {
        const ytdFlexyElm = elements.flexy;
        if (!ytdFlexyElm)
          return r;
        if (flag & 1) {
          r |= 1;
          if (!ytdFlexyElm.hasAttribute000("theater"))
            r -= 1;
        }
        if (flag & 2) {
          r |= 2;
          if (!ytdFlexyElm.getAttribute000("tyt-tab"))
            r -= 2;
        }
        if (flag & 4) {
          r |= 4;
          if (ytdFlexyElm.getAttribute000("tyt-chat") !== "-")
            r -= 4;
        }
        if (flag & 8) {
          r |= 8;
          if (ytdFlexyElm.getAttribute000("tyt-chat") !== "+")
            r -= 8;
        }
        if (flag & 16) {
          r |= 16;
          if (!ytdFlexyElm.hasAttribute000("is-two-columns_"))
            r -= 16;
        }
        if (flag & 32) {
          r |= 32;
          if (!ytdFlexyElm.hasAttribute000("tyt-egm-panel_"))
            r -= 32;
        }
        if (flag & 64) {
          r |= 64;
          if (!document.fullscreenElement)
            r -= 64;
        }
        if (flag & 128) {
          r |= 128;
          if (!ytdFlexyElm.hasAttribute000("tyt-playlist-expanded"))
            r -= 128;
        }
        if (flag & 4096) {
          r |= 4096;
          if (ytdFlexyElm.getAttribute("tyt-external-ytlstm") !== "1")
            r -= 4096;
        }
        return r;
      };
      const updateChatLocation498 = function() {
        if (this.is !== "ytd-watch-grid") {
          secondaryInnerFn(() => {
            this.updatePageMediaQueries();
            this.schedulePlayerSizeUpdate_();
          });
        }
      };
      const mirrorNodeWS = /* @__PURE__ */ new WeakMap();
      const dummyNode = document.createElement("noscript");
      const __j4836__ = Symbol();
      const __j5744__ = Symbol();
      const __j5733__ = Symbol();
      const monitorDataChangedByDOMMutation = async function(mutations) {
        const nodeWR = this;
        const node = kRef(nodeWR);
        if (!node)
          return;
        const cnt = insp(node);
        const __lastChanged__ = cnt[__j5733__];
        const val = cnt.data ? cnt.data[__j4836__] || 1 : 0;
        if (__lastChanged__ !== val) {
          cnt[__j5733__] = val > 0 ? cnt.data[__j4836__] = Date.now() : 0;
          await Promise.resolve();
          attributeInc(node, "tyt-data-change-counter");
        }
      };
      const moChangeReflection = function(mutations) {
        const nodeWR = this;
        const node = kRef(nodeWR);
        if (!node)
          return;
        const originElement = kRef(node[__j5744__] || null) || null;
        if (!originElement)
          return;
        const cnt = insp(node);
        const oriCnt = insp(originElement);
        if (mutations) {
          let bfDataChangeCounter = false;
          for (const mutation of mutations) {
            if (mutation.attributeName === "tyt-clone-refresh-count" && mutation.target === originElement) {
              bfDataChangeCounter = true;
            } else if (mutation.attributeName === "tyt-data-change-counter" && mutation.target === originElement) {
              bfDataChangeCounter = true;
            }
          }
          if (bfDataChangeCounter && oriCnt.data) {
            node.replaceWith(dummyNode);
            cnt.data = Object.assign({}, oriCnt.data);
            dummyNode.replaceWith(node);
          }
        }
      };
      const attributeInc = (elm, prop) => {
        let v = (+elm.getAttribute000(prop) || 0) + 1;
        if (v > 1e9)
          v = 9;
        elm.setAttribute000(prop, v);
        return v;
      };
      const isChannelId = (x) => {
        if (typeof x === "string" && x.length === 24) {
          return /UC[-_a-zA-Z0-9+=.]{22}/.test(x);
        }
        return false;
      };
      const infoFix = (lockId) => {
        if (lockId !== null && lockGet["infoFixLock"] !== lockId)
          return;
        const infoExpander = elements.infoExpander;
        const infoContainer = (infoExpander ? infoExpander.parentNode : null) || document.querySelector("#tab-info");
        const ytdFlexyElm = elements.flexy;
        if (!infoContainer || !ytdFlexyElm)
          return;
        if (infoExpander) {
          const match = infoExpander.matches("#tab-info > [class]") || infoExpander.matches("#tab-info > [tyt-main-info]");
          if (!match)
            return;
        }
        const requireElements = [...document.querySelectorAll('ytd-watch-metadata.ytd-watch-flexy div[slot="extra-content"] > *, ytd-watch-metadata.ytd-watch-flexy #extra-content > *')].filter((elm) => {
          return typeof elm.is == "string";
        }).map((elm) => {
          const is = elm.is;
          while (elm instanceof HTMLElement_) {
            const q = [...elm.querySelectorAll(is)].filter((e) => insp(e).data);
            if (q.length >= 1)
              return q[0];
            elm = elm.parentNode;
          }
        }).filter((elm) => !!elm && typeof elm.is === "string");
        const source = requireElements.map((entry) => {
          const inst = insp(entry);
          return {
            data: inst.data,
            tag: inst.is,
            elm: entry
          };
        });
        let noscript_ = document.querySelector("noscript#aythl");
        if (!noscript_) {
          noscript_ = document.createElement("noscript");
          noscript_.id = "aythl";
          inPageRearrange = true;
          ytdFlexyElm.insertBefore000(noscript_, ytdFlexyElm.firstChild);
          inPageRearrange = false;
        }
        const noscript = noscript_;
        let requiredUpdate = false;
        const mirrorElmSet = /* @__PURE__ */ new Set();
        const targetParent = infoContainer;
        for (const { data, tag, elm: s } of source) {
          let mirrorNode = mirrorNodeWS.get(s);
          mirrorNode = mirrorNode ? kRef(mirrorNode) : mirrorNode;
          if (!mirrorNode) {
            const cnt = insp(s);
            const cProto = cnt.constructor.prototype;
            const element = document.createElement(tag);
            noscript.appendChild(element);
            mirrorNode = element;
            mirrorNode[__j5744__] = mWeakRef(s);
            const nodeWR = mWeakRef(mirrorNode);
            new MutationObserver(moChangeReflection.bind(nodeWR)).observe(s, { attributes: true, attributeFilter: ["tyt-clone-refresh-count", "tyt-data-change-counter"] });
            s.jy8432 = 1;
            if (!(cProto instanceof Node) && !cProto._dataChanged496 && typeof cProto._createPropertyObserver === "function") {
              cProto._dataChanged496 = function() {
                const cnt2 = this;
                const node = cnt2.hostElement || cnt2;
                if (node.jy8432) {
                  attributeInc(node, "tyt-data-change-counter");
                }
              };
              cProto._createPropertyObserver("data", "_dataChanged496", void 0);
            } else if (!(cProto instanceof Node) && !cProto._dataChanged496 && cProto.useSignals === true && insp(s).signalProxy) {
              const dataSignal = cnt?.signalProxy?.signalCache?.data;
              if (dataSignal && typeof dataSignal.setWithPath === "function" && !dataSignal.setWithPath573 && !dataSignal.controller573) {
                dataSignal.controller573 = mWeakRef(cnt);
                dataSignal.setWithPath573 = dataSignal.setWithPath;
                dataSignal.setWithPath = function() {
                  const cnt2 = kRef(this.controller573 || null) || null;
                  cnt2 && typeof cnt2._dataChanged496k === "function" && Promise.resolve(cnt2).then(cnt2._dataChanged496k).catch(console.warn);
                  return this.setWithPath573(...arguments);
                };
                cProto._dataChanged496 = function() {
                  const cnt2 = this;
                  const node = cnt2.hostElement || cnt2;
                  if (node.jy8432) {
                    attributeInc(node, "tyt-data-change-counter");
                  }
                };
                cProto._dataChanged496k = (cnt2) => cnt2._dataChanged496();
              }
            }
            if (!cProto._dataChanged496) {
              new MutationObserver(monitorDataChangedByDOMMutation.bind(mirrorNode[__j5744__])).observe(s, { attributes: true, childList: true, subtree: true });
            }
            mirrorNodeWS.set(s, nodeWR);
            requiredUpdate = true;
          } else {
            if (mirrorNode.parentNode !== targetParent) {
              requiredUpdate = true;
            }
          }
          if (!requiredUpdate) {
            const cloneNodeCnt = insp(mirrorNode);
            if (cloneNodeCnt.data !== data) {
              requiredUpdate = true;
            }
          }
          mirrorElmSet.add(mirrorNode);
          source.mirrored = mirrorNode;
        }
        const mirroElmArr = [...mirrorElmSet];
        mirrorElmSet.clear();
        if (!requiredUpdate) {
          let e = infoExpander ? -1 : 0;
          for (let n = targetParent.firstChild; n instanceof Node; n = n.nextSibling) {
            let target = e < 0 ? infoExpander : mirroElmArr[e];
            e++;
            if (n !== target) {
              requiredUpdate = true;
              break;
            }
          }
          if (!requiredUpdate && e !== mirroElmArr.length + 1)
            requiredUpdate = true;
        }
        if (requiredUpdate) {
          if (infoExpander) {
            targetParent.assignChildren111(null, infoExpander, mirroElmArr);
          } else {
            targetParent.replaceChildren000(...mirroElmArr);
          }
          for (const mirrorElm of mirroElmArr) {
            const j = attributeInc(mirrorElm, "tyt-clone-refresh-count");
            const oriElm = kRef(mirrorElm[__j5744__] || null) || null;
            if (oriElm) {
              oriElm.setAttribute111("tyt-clone-refresh-count", j);
            }
          }
        }
        mirroElmArr.length = 0;
        source.length = 0;
      };
      const layoutFix = (lockId) => {
        if (lockGet["layoutFixLock"] !== lockId)
          return;
        const secondaryWrapper = document.querySelector("#secondary-inner.style-scope.ytd-watch-flexy > secondary-wrapper");
        if (secondaryWrapper) {
          const secondaryInner = secondaryWrapper.parentNode;
          const chatContainer = document.querySelector("#columns.style-scope.ytd-watch-flexy [tyt-chat-container]");
          if (secondaryInner.firstChild !== secondaryInner.lastChild || chatContainer && !chatContainer.closest("secondary-wrapper")) {
            let w = [];
            let w2 = [];
            for (let node = secondaryInner.firstChild; node instanceof Node; node = node.nextSibling) {
              if (node === chatContainer && chatContainer) {
              } else if (node === secondaryWrapper) {
                for (let node2 = secondaryWrapper.firstChild; node2 instanceof Node; node2 = node2.nextSibling) {
                  if (node2 === chatContainer && chatContainer) {
                  } else {
                    if (node2.id === "right-tabs" && chatContainer) {
                      w2.push(chatContainer);
                    }
                    w2.push(node2);
                  }
                }
              } else {
                w.push(node);
              }
            }
            inPageRearrange = true;
            secondaryWrapper.replaceChildren000(...w, ...w2);
            inPageRearrange = false;
            const chatElm = elements.chat;
            const chatCnt = insp(chatElm);
            if (chatCnt && typeof chatCnt.urlChanged === "function" && secondaryWrapper.contains(chatElm)) {
              if (typeof chatCnt.urlChangedAsync12 === "function") {
                DEBUG_5085 && void 0;
                chatCnt.urlChanged();
              } else {
                DEBUG_5085 && void 0;
                setTimeout(() => chatCnt.urlChanged(), 136);
              }
            }
          }
        }
      };
      let lastPanel = "";
      let lastTab = "";
      const aoEgmPanels = new MutationObserver(() => {
        Promise.resolve(lockSet["updateEgmPanelsLock"]).then(updateEgmPanels).catch(console.warn);
      });
      const removeKeepCommentsScroller = async (lockId) => {
        if (lockGet["removeKeepCommentsScrollerLock"] !== lockId)
          return;
        await Promise.resolve();
        if (lockGet["removeKeepCommentsScrollerLock"] !== lockId)
          return;
        const ytdFlexyFlm = elements.flexy;
        if (ytdFlexyFlm) {
          ytdFlexyFlm.removeAttribute000("keep-comments-scroller");
        }
      };
      const updateEgmPanels = async (lockId) => {
        if (lockId !== lockGet["updateEgmPanelsLock"])
          return;
        await navigateFinishedPromise.then().catch(console.warn);
        if (lockId !== lockGet["updateEgmPanelsLock"])
          return;
        const ytdFlexyElm = elements.flexy;
        if (!ytdFlexyElm)
          return;
        let newVisiblePanels = [];
        let newHiddenPanels = [];
        let allVisiblePanels = [];
        for (const panelElm of document.querySelectorAll("[tyt-egm-panel][target-id][visibility]")) {
          const visibility = panelElm.getAttribute000("visibility");
          if (visibility === "ENGAGEMENT_PANEL_VISIBILITY_HIDDEN" || panelElm.closest("[hidden]")) {
            if (panelElm.hasAttribute000("tyt-visible-at")) {
              panelElm.removeAttribute000("tyt-visible-at");
              newHiddenPanels.push(panelElm);
            }
          } else if (visibility === "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED" && !panelElm.closest("[hidden]")) {
            let visibleAt = panelElm.getAttribute000("tyt-visible-at");
            if (!visibleAt) {
              panelElm.setAttribute111("tyt-visible-at", Date.now());
              newVisiblePanels.push(panelElm);
            }
            allVisiblePanels.push(panelElm);
          }
        }
        if (newVisiblePanels.length >= 1 && allVisiblePanels.length >= 2) {
          const targetVisible = newVisiblePanels[newVisiblePanels.length - 1];
          const actions = [];
          for (const panelElm of allVisiblePanels) {
            if (panelElm === targetVisible)
              continue;
            const pid = getPanelIdentifier(panelElm);
            actions.push({
              panelId: pid,
              toHide: true
            });
          }
          if (actions.length >= 1) {
            ytBtnEgmPanelCore(actions);
          }
        }
        if (allVisiblePanels.length >= 1) {
          ytdFlexyElm.setAttribute111("tyt-egm-panel_", "");
        } else {
          ytdFlexyElm.removeAttribute000("tyt-egm-panel_");
        }
        newVisiblePanels.length = 0;
        newVisiblePanels = null;
        newHiddenPanels.length = 0;
        newHiddenPanels = null;
        allVisiblePanels.length = 0;
        allVisiblePanels = null;
      };
      const checkElementExist = (css, exclude) => {
        for (const p of document.querySelectorAll(css)) {
          if (!p.closest(exclude))
            return p;
        }
        return null;
      };
      let fixInitialTabStateK = 0;
      const { handleNavigateFactory } = (() => {
        let isLoadStartListened = false;
        function findLcComment(lc) {
          if (arguments.length === 1) {
            let element = document.querySelector(`#tab-comments ytd-comments ytd-comment-renderer #header-author a[href*="lc=${lc}"]`);
            if (element) {
              let commentRendererElm = closestFromAnchor.call(element, "ytd-comment-renderer");
              if (commentRendererElm && lc) {
                return {
                  lc,
                  commentRendererElm
                };
              }
            }
          } else if (arguments.length === 0) {
            let element = document.querySelector(`#tab-comments ytd-comments ytd-comment-renderer > #linked-comment-badge span:not(:empty)`);
            if (element) {
              let commentRendererElm = closestFromAnchor.call(element, "ytd-comment-renderer");
              if (commentRendererElm) {
                let header = _querySelector.call(commentRendererElm, "#header-author");
                if (header) {
                  let anchor = _querySelector.call(header, 'a[href*="lc="]');
                  if (anchor) {
                    let href = anchor.getAttribute("href") || "";
                    let m = /[&?]lc=([\w_.-]+)/.exec(href);
                    if (m) {
                      lc = m[1];
                    }
                  }
                }
              }
              if (commentRendererElm && lc) {
                return {
                  lc,
                  commentRendererElm
                };
              }
            }
          }
          return null;
        }
        function lcSwapFuncA(targetLcId, currentLcId) {
          let done = 0;
          try {
            let r1 = findLcComment(currentLcId).commentRendererElm;
            let r2 = findLcComment(targetLcId).commentRendererElm;
            if (typeof insp(r1).data.linkedCommentBadge === "object" && typeof insp(r2).data.linkedCommentBadge === "undefined") {
              let p = Object.assign({}, insp(r1).data.linkedCommentBadge);
              if (((p || 0).metadataBadgeRenderer || 0).trackingParams) {
                delete p.metadataBadgeRenderer.trackingParams;
              }
              const v1 = findContentsRenderer(r1);
              const v2 = findContentsRenderer(r2);
              if (v1.parent === v2.parent && (v2.parent.nodeName === "YTD-COMMENTS" || v2.parent.nodeName === "YTD-ITEM-SECTION-RENDERER")) {
              } else {
                return false;
              }
              if (v2.index >= 0) {
                if (v2.parent.nodeName === "YTD-COMMENT-REPLIES-RENDERER") {
                  if (lcSwapFuncB(targetLcId, currentLcId, p)) {
                    done = 1;
                  }
                  done = 1;
                } else {
                  const v2pCnt = insp(v2.parent);
                  const v2Conents = (v2pCnt.data || 0).contents || 0;
                  if (!v2Conents)
                    ;
                  v2pCnt.data = Object.assign({}, v2pCnt.data, { contents: [].concat([v2Conents[v2.index]], v2Conents.slice(0, v2.index), v2Conents.slice(v2.index + 1)) });
                  if (lcSwapFuncB(targetLcId, currentLcId, p)) {
                    done = 1;
                  }
                }
              }
            }
          } catch (e) {
          }
          return done === 1;
        }
        function lcSwapFuncB(targetLcId, currentLcId, _p) {
          let done = 0;
          try {
            let r1 = findLcComment(currentLcId).commentRendererElm;
            let r1cnt = insp(r1);
            let r2 = findLcComment(targetLcId).commentRendererElm;
            let r2cnt = insp(r2);
            const r1d = r1cnt.data;
            let p = Object.assign({}, _p);
            r1d.linkedCommentBadge = null;
            delete r1d.linkedCommentBadge;
            let q = Object.assign({}, r1d);
            q.linkedCommentBadge = null;
            delete q.linkedCommentBadge;
            r1cnt.data = Object.assign({}, q);
            r2cnt.data = Object.assign({}, r2cnt.data, { linkedCommentBadge: p });
            done = 1;
          } catch (e) {
          }
          return done === 1;
        }
        const loadStartFx = async (evt) => {
          let media = (evt || 0).target || 0;
          if (media.nodeName === "VIDEO" || media.nodeName === "AUDIO") {
          } else
            return;
          const newMedia = media;
          const media1 = common.getMediaElement(0);
          const media2 = common.getMediaElements(2);
          if (media1 !== null && media2.length > 0) {
            if (newMedia !== media1 && media1.paused === false) {
              if (isVideoPlaying(media1)) {
                Promise.resolve(newMedia).then((video) => video.paused === false && video.pause()).catch(console.warn);
              }
            } else if (newMedia === media1) {
              for (const s of media2) {
                if (s.paused === false) {
                  Promise.resolve(s).then((s2) => s2.paused === false && s2.pause()).catch(console.warn);
                  break;
                }
              }
            } else {
              Promise.resolve(media1).then((video1) => video1.paused === false && video1.pause()).catch(console.warn);
            }
          }
        };
        const getBrowsableEndPoint = (req) => {
          let valid = false;
          let endpoint = req ? req.command : null;
          if (endpoint && (endpoint.commandMetadata || 0).webCommandMetadata && endpoint.watchEndpoint) {
            let videoId = endpoint.watchEndpoint.videoId;
            let url = endpoint.commandMetadata.webCommandMetadata.url;
            if (typeof videoId === "string" && typeof url === "string" && url.indexOf("lc=") > 0) {
              let m = /^\/watch\?v=([\w_-]+)&lc=([\w_.-]+)$/.exec(url);
              if (m && m[1] === videoId) {
                let targetLc = findLcComment(m[2]);
                let currentLc = targetLc ? findLcComment() : null;
                if (targetLc && currentLc) {
                  let done = targetLc.lc === currentLc.lc ? 1 : lcSwapFuncA(targetLc.lc, currentLc.lc) ? 1 : 0;
                  if (done === 1) {
                    common.xReplaceState(history.state, url);
                    return;
                  }
                }
              }
            }
          }
          if (endpoint && (endpoint.commandMetadata || 0).webCommandMetadata && endpoint.browseEndpoint && isChannelId(endpoint.browseEndpoint.browseId)) {
            valid = true;
          } else if (endpoint && (endpoint.browseEndpoint || endpoint.searchEndpoint) && !endpoint.urlEndpoint && !endpoint.watchEndpoint) {
            if (endpoint.browseEndpoint && endpoint.browseEndpoint.browseId === "FEwhat_to_watch") {
              const playerMedia = common.getMediaElement(1);
              if (playerMedia && playerMedia.paused === false)
                valid = true;
            } else if (endpoint.commandMetadata && endpoint.commandMetadata.webCommandMetadata) {
              let meta = endpoint.commandMetadata.webCommandMetadata;
              if (meta && meta.url && meta.webPageType) {
                valid = true;
              }
            }
          }
          if (!valid)
            endpoint = null;
          return endpoint;
        };
        const shouldUseMiniPlayer = () => {
          if (!autoMiniPlayerEnabled)
            return false;
          const isSubTypeExist = document.querySelector("ytd-page-manager#page-manager > ytd-browse[page-subtype]");
          if (isSubTypeExist)
            return true;
          const movie_player = [...document.querySelectorAll("#movie_player")].filter((e) => !e.closest("[hidden]"))[0];
          if (movie_player) {
            const media = qsOne(movie_player, "video[class], audio[class]");
            if (media && media.currentTime > 3 && media.duration - media.currentTime > 3 && media.paused === false) {
              return true;
            }
          }
          return false;
        };
        const conditionFulfillment = (req) => {
          const command = req ? req.command : null;
          DEBUG_handleNavigateFactory && void 0;
          if (!command)
            return;
          if (command && (command.commandMetadata || 0).webCommandMetadata && command.watchEndpoint) {
          } else if (command && (command.commandMetadata || 0).webCommandMetadata && command.browseEndpoint && isChannelId(command.browseEndpoint.browseId)) {
          } else if (command && (command.browseEndpoint || command.searchEndpoint) && !command.urlEndpoint && !command.watchEndpoint) {
          } else {
            return false;
          }
          DEBUG_handleNavigateFactory && void 0;
          if (!shouldUseMiniPlayer())
            return false;
          DEBUG_handleNavigateFactory && void 0;
          if (pageType !== "watch")
            return false;
          DEBUG_handleNavigateFactory && void 0;
          return true;
        };
        let u38 = 0;
        const fixChannelAboutPopup = async (t38) => {
          let promise = new PromiseExternal();
          const f = () => {
            promise && promise.resolve();
            promise = null;
          };
          document.addEventListener("yt-navigate-finish", f, false);
          await promise.then();
          promise = null;
          document.removeEventListener("yt-navigate-finish", f, false);
          if (t38 !== u38)
            return;
          setTimeout(() => {
            const currentAbout = [...document.querySelectorAll("ytd-about-channel-renderer")].filter((e) => !e.closest("[hidden]"))[0];
            let okay = false;
            if (!currentAbout)
              okay = true;
            else {
              const popupContainer = currentAbout.closest("ytd-popup-container");
              if (popupContainer) {
                const cnt = insp(popupContainer);
                let arr = null;
                try {
                  arr = cnt.handleGetOpenedPopupsAction_();
                } catch (e) {
                }
                if (arr && arr.length === 0)
                  okay = true;
              } else {
                okay = false;
              }
            }
            if (okay) {
              const descriptionModel = [...document.querySelectorAll("yt-description-preview-view-model")].filter((e) => !e.closest("[hidden]"))[0];
              if (descriptionModel) {
                const button = [...descriptionModel.querySelectorAll("button")].filter((e) => !e.closest("[hidden]") && `${e.textContent}`.trim().length > 0)[0];
                if (button) {
                  button.click();
                }
              }
            }
          }, 80);
        };
        const handleNavigateFactory2 = (handleNavigate) => {
          return function(req) {
            if (u38 > 1e9)
              u38 = 9;
            const t38 = ++u38;
            const $this = this;
            const $arguments = arguments;
            let endpoint = null;
            if (conditionFulfillment(req)) {
              endpoint = getBrowsableEndPoint(req);
              DEBUG_handleNavigateFactory && void 0;
            }
            DEBUG_handleNavigateFactory && void 0;
            if (!endpoint || !shouldUseMiniPlayer())
              return handleNavigate.apply($this, $arguments);
            const ytdAppElm = document.querySelector("ytd-app");
            const ytdAppCnt = insp(ytdAppElm);
            let object = null;
            try {
              object = ytdAppCnt.data.response.currentVideoEndpoint.watchEndpoint || null;
            } catch (e) {
              object = null;
            }
            DEBUG_handleNavigateFactory && void 0;
            if (typeof object !== "object")
              object = null;
            const once = { once: true };
            if (object !== null && !("playlistId" in object)) {
              DEBUG_handleNavigateFactory && void 0;
              let wObject = mWeakRef(object);
              const N = 3;
              let count = 0;
              Object.defineProperty(kRef(wObject) || {}, "playlistId", {
                get() {
                  DEBUG_handleNavigateFactory && void 0;
                  count++;
                  if (count === N) {
                    delete this.playlistId;
                  }
                  return "*";
                },
                set(value) {
                  DEBUG_handleNavigateFactory && void 0;
                  delete this.playlistId;
                  this.playlistId = value;
                },
                enumerable: false,
                configurable: true
              });
              let playlistClearout = null;
              let timeoutid = 0;
              Promise.race([
                new Promise((r) => {
                  timeoutid = setTimeout(r, 4e3);
                }),
                new Promise((r) => {
                  playlistClearout = () => {
                    if (timeoutid > 0) {
                      clearTimeout(timeoutid);
                      timeoutid = 0;
                    }
                    r();
                  };
                  document.addEventListener("yt-page-type-changed", playlistClearout, once);
                })
              ]).then(() => {
                if (timeoutid !== 0) {
                  playlistClearout && document.removeEventListener("yt-page-type-changed", playlistClearout, once);
                  timeoutid = 0;
                }
                playlistClearout = null;
                count = N - 1;
                let object2 = kRef(wObject);
                wObject = null;
                return object2 ? object2.playlistId : null;
              }).catch(console.warn);
            }
            if (!isLoadStartListened) {
              isLoadStartListened = true;
              document.addEventListener("loadstart", loadStartFx, true);
            }
            const endpointURL = `${endpoint?.commandMetadata?.webCommandMetadata?.url || ""}`;
            if (endpointURL && endpointURL.endsWith("/about") && /\/channel\/UC[-_a-zA-Z0-9+=.]{22}\/about/.test(endpointURL)) {
              fixChannelAboutPopup(t38);
            }
            handleNavigate.apply($this, $arguments);
          };
        };
        return { handleNavigateFactory: handleNavigateFactory2 };
      })();
      const common = (() => {
        let mediaModeLock = 0;
        const _getMediaElement = (i) => {
          if (mediaModeLock === 0) {
            let e = document.querySelector(".video-stream.html5-main-video") || document.querySelector("#movie_player video, #movie_player audio") || document.querySelector("body video[src], body audio[src]");
            if (e) {
              if (e.nodeName === "VIDEO")
                mediaModeLock = 1;
              else if (e.nodeName === "AUDIO")
                mediaModeLock = 2;
            }
          }
          if (!mediaModeLock)
            return null;
          if (mediaModeLock === 1) {
            switch (i) {
              case 1:
                return "ytd-player#ytd-player video[src]";
              case 2:
                return 'ytd-browse[role="main"] video[src]';
              case 0:
              default:
                return "#movie_player video[src]";
            }
          } else if (mediaModeLock === 2) {
            switch (i) {
              case 1:
                return "ytd-player#ytd-player audio.video-stream.html5-main-video[src]";
              case 2:
                return 'ytd-browse[role="main"] audio.video-stream.html5-main-video[src]';
              case 0:
              default:
                return "#movie_player audio.video-stream.html5-main-video[src]";
            }
          }
          return null;
        };
        return {
          xReplaceState(s, u) {
            try {
              history.replaceState(s, "", u);
            } catch (e) {
            }
            if (s.endpoint) {
              try {
                const ytdAppElm = document.querySelector("ytd-app");
                const ytdAppCnt = insp(ytdAppElm);
                ytdAppCnt.replaceState(s.endpoint, "", u);
              } catch (e) {
              }
            }
          },
          getMediaElement(i) {
            let s = _getMediaElement(i) || "";
            if (s)
              return document.querySelector(s);
            return null;
          },
          getMediaElements(i) {
            let s = _getMediaElement(i) || "";
            if (s)
              return document.querySelectorAll(s);
            return [];
          }
        };
      })();
      let inPageRearrange = false;
      let tmpLastVideoId = "";
      const getCurrentVideoId = () => {
        const ytdFlexyElm = elements.flexy;
        const ytdFlexyCnt = insp(ytdFlexyElm);
        if (ytdFlexyCnt && typeof ytdFlexyCnt.videoId === "string")
          return ytdFlexyCnt.videoId;
        if (ytdFlexyElm && typeof ytdFlexyElm.videoId === "string")
          return ytdFlexyElm.videoId;
        return "";
      };
      const holdInlineExpanderAlwaysExpanded = (inlineExpanderCnt) => {
        if (inlineExpanderCnt.alwaysShowExpandButton === true)
          inlineExpanderCnt.alwaysShowExpandButton = false;
        if (typeof (inlineExpanderCnt.collapseLabel || 0) === "string")
          inlineExpanderCnt.collapseLabel = "";
        if (typeof (inlineExpanderCnt.expandLabel || 0) === "string")
          inlineExpanderCnt.expandLabel = "";
        if (inlineExpanderCnt.showCollapseButton === true)
          inlineExpanderCnt.showCollapseButton = false;
        if (inlineExpanderCnt.showExpandButton === true)
          inlineExpanderCnt.showExpandButton = false;
        if (inlineExpanderCnt.expandButton instanceof HTMLElement_) {
          inlineExpanderCnt.expandButton = null;
          inlineExpanderCnt.expandButton.remove();
        }
      };
      const fixInlineExpanderDisplay = (inlineExpanderCnt) => {
        try {
          inlineExpanderCnt.updateIsAttributedExpanded();
        } catch (e) {
        }
        try {
          inlineExpanderCnt.updateIsFormattedExpanded();
        } catch (e) {
        }
        try {
          inlineExpanderCnt.updateTextOnSnippetTypeChange();
        } catch (e) {
        }
        try {
          inlineExpanderCnt.updateStyles();
        } catch (e) {
        }
      };
      const setExpand = (cnt) => {
        if (typeof cnt.set === "function") {
          cnt.set("isExpanded", true);
          if (typeof cnt.isExpandedChanged === "function")
            cnt.isExpandedChanged();
        } else if (cnt.isExpanded === false) {
          cnt.isExpanded = true;
          if (typeof cnt.isExpandedChanged === "function")
            cnt.isExpandedChanged();
        }
      };
      const cloneMethods = {
        updateTextOnSnippetTypeChange() {
          if (this.isResetMutation === false)
            this.isResetMutation = true;
          if (this.isExpanded === true)
            this.isExpanded = false;
          setExpand(this, true);
          if (this.isResetMutation === false)
            this.isResetMutation = true;
          try {
          } catch (e) {
          }
        },
        collapse() {
        },
        computeExpandButtonOffset() {
          return 0;
        },
        dataChanged() {
        }
      };
      const fixInlineExpanderMethods = (inlineExpanderCnt) => {
        if (inlineExpanderCnt && !inlineExpanderCnt.__$idncjk8487$__) {
          inlineExpanderCnt.__$idncjk8487$__ = true;
          inlineExpanderCnt.dataChanged = cloneMethods.dataChanged;
          inlineExpanderCnt.updateTextOnSnippetTypeChange = cloneMethods.updateTextOnSnippetTypeChange;
          if (typeof inlineExpanderCnt.collapse === "function") {
            inlineExpanderCnt.collapse = cloneMethods.collapse;
          }
          if (typeof inlineExpanderCnt.computeExpandButtonOffset === "function") {
            inlineExpanderCnt.computeExpandButtonOffset = cloneMethods.computeExpandButtonOffset;
          }
          if (typeof inlineExpanderCnt.isResetMutation === "boolean") {
            inlineExpanderCnt.isResetMutation = true;
          }
          if (typeof inlineExpanderCnt.collapseLabel === "string") {
            inlineExpanderCnt.collapseLabel = "";
          }
          fixInlineExpanderDisplay(inlineExpanderCnt);
        }
      };
      const fixInlineExpanderContent = () => {
        const mainInfo = getMainInfo();
        if (!mainInfo)
          return;
        const inlineExpanderElm = mainInfo.querySelector("ytd-text-inline-expander");
        const inlineExpanderCnt = insp(inlineExpanderElm);
        fixInlineExpanderMethods(inlineExpanderCnt);
      };
      const plugin = {
        "minibrowser": {
          activated: false,
          toUse: true,
          activate() {
            if (this.activated)
              return;
            const isPassiveArgSupport2 = typeof IntersectionObserver === "function";
            if (!isPassiveArgSupport2)
              return;
            this.activated = true;
            const ytdAppElm = document.querySelector("ytd-app");
            const ytdAppCnt = insp(ytdAppElm);
            if (!ytdAppCnt)
              return;
            const cProto = ytdAppCnt.constructor.prototype;
            if (!cProto.handleNavigate)
              return;
            if (cProto.handleNavigate.__ma355__)
              return;
            cProto.handleNavigate = handleNavigateFactory(cProto.handleNavigate);
            cProto.handleNavigate.__ma355__ = 1;
          }
        },
        "autoExpandInfoDesc": {
          activated: false,
          toUse: false,
          mo: null,
          promiseReady: new PromiseExternal(),
          moFn(lockId) {
            if (lockGet["autoExpandInfoDescAttrAsyncLock"] !== lockId)
              return;
            const mainInfo = getMainInfo();
            if (!mainInfo)
              return;
            switch (((mainInfo || 0).nodeName || "").toLowerCase()) {
              case "ytd-expander":
                if (mainInfo.hasAttribute000("collapsed")) {
                  let success = false;
                  try {
                    insp(mainInfo).handleMoreTap(new Event("tap"));
                    success = true;
                  } catch (e) {
                  }
                  if (success)
                    mainInfo.setAttribute111("tyt-no-less-btn", "");
                }
                break;
              case "ytd-expandable-video-description-body-renderer":
                const inlineExpanderElm = mainInfo.querySelector("ytd-text-inline-expander");
                const inlineExpanderCnt = insp(inlineExpanderElm);
                if (inlineExpanderCnt && inlineExpanderCnt.isExpanded === false) {
                  setExpand(inlineExpanderCnt, true);
                }
                break;
            }
          },
          activate() {
            if (this.activated)
              return;
            this.moFn = this.moFn.bind(this);
            this.mo = new MutationObserver(() => {
              Promise.resolve(lockSet["autoExpandInfoDescAttrAsyncLock"]).then(this.moFn).catch(console.warn);
            });
            this.activated = true;
            this.promiseReady.resolve();
          },
          async onMainInfoSet(mainInfo) {
            await this.promiseReady.then();
            if (mainInfo.nodeName.toLowerCase() === "ytd-expander") {
              this.mo.observe(mainInfo, { attributes: true, attributeFilter: ["collapsed", "attr-8ifv7"] });
            } else {
              this.mo.observe(mainInfo, { attributes: true, attributeFilter: ["attr-8ifv7"] });
            }
            mainInfo.incAttribute111("attr-8ifv7");
          }
        },
        "fullChannelNameOnHover": {
          activated: false,
          toUse: true,
          mo: null,
          ro: null,
          promiseReady: new PromiseExternal(),
          checkResize: 0,
          mouseEnterFn(evt) {
            const target = evt ? evt.target : null;
            if (!(target instanceof HTMLElement_))
              return;
            const metaDataElm = target.closest("ytd-watch-metadata");
            metaDataElm.classList.remove("tyt-metadata-hover-resized");
            this.checkResize = Date.now() + 300;
            metaDataElm.classList.add("tyt-metadata-hover");
          },
          mouseLeaveFn(evt) {
            const target = evt ? evt.target : null;
            if (!(target instanceof HTMLElement_))
              return;
            const metaDataElm = target.closest("ytd-watch-metadata");
            metaDataElm.classList.remove("tyt-metadata-hover-resized");
            metaDataElm.classList.remove("tyt-metadata-hover");
          },
          moFn(lockId) {
            if (lockGet["fullChannelNameOnHoverAttrAsyncLock"] !== lockId)
              return;
            const uploadInfo = document.querySelector("#primary.ytd-watch-flexy ytd-watch-metadata #upload-info");
            if (!uploadInfo)
              return;
            const evtOpt = { passive: true, capture: false };
            uploadInfo.removeEventListener("pointerenter", this.mouseEnterFn, evtOpt);
            uploadInfo.removeEventListener("pointerleave", this.mouseLeaveFn, evtOpt);
            uploadInfo.addEventListener("pointerenter", this.mouseEnterFn, evtOpt);
            uploadInfo.addEventListener("pointerleave", this.mouseLeaveFn, evtOpt);
          },
          async onNavigateFinish() {
            await this.promiseReady.then();
            const uploadInfo = document.querySelector("#primary.ytd-watch-flexy ytd-watch-metadata #upload-info");
            if (!uploadInfo)
              return;
            this.mo.observe(uploadInfo, { attributes: true, attributeFilter: ["hidden", "attr-3wb0k"] });
            uploadInfo.incAttribute111("attr-3wb0k");
            this.ro.observe(uploadInfo);
          },
          activate() {
            if (this.activated)
              return;
            const isPassiveArgSupport2 = typeof IntersectionObserver === "function";
            if (!isPassiveArgSupport2)
              return;
            this.activated = true;
            this.mouseEnterFn = this.mouseEnterFn.bind(this);
            this.mouseLeaveFn = this.mouseLeaveFn.bind(this);
            this.moFn = this.moFn.bind(this);
            this.mo = new MutationObserver(() => {
              Promise.resolve(lockSet["fullChannelNameOnHoverAttrAsyncLock"]).then(this.moFn).catch(console.warn);
            });
            this.ro = new ResizeObserver((mutations) => {
              if (Date.now() > this.checkResize)
                return;
              for (const mutation of mutations) {
                const uploadInfo = mutation.target;
                if (uploadInfo && mutation.contentRect.width > 0 && mutation.contentRect.height > 0) {
                  const metaDataElm = uploadInfo.closest("ytd-watch-metadata");
                  if (metaDataElm.classList.contains("tyt-metadata-hover")) {
                    metaDataElm.classList.add("tyt-metadata-hover-resized");
                  }
                  break;
                }
              }
            });
            this.promiseReady.resolve();
          }
        },
        "external.ytlstm": {
          activated: false,
          toUse: true,
          activate() {
            if (this.activated)
              return;
            this.activated = true;
            document.documentElement.classList.add("external-ytlstm");
          }
        }
      };
      if (sessionStorage.__$tmp_UseAutoExpandInfoDesc$__)
        plugin.autoExpandInfoDesc.toUse = true;
      const __attachedSymbol__ = Symbol();
      const makeInitAttached = (tag) => {
        const inPageRearrange_ = inPageRearrange;
        inPageRearrange = false;
        for (const elm of document.querySelectorAll(`${tag}`)) {
          const cnt = insp(elm) || 0;
          if (typeof cnt.attached498 === "function" && !elm[__attachedSymbol__])
            Promise.resolve(elm).then(eventMap[`${tag}::attached`]).catch(console.warn);
        }
        inPageRearrange = inPageRearrange_;
      };
      const getGeneralChatElement = async () => {
        for (let i = 2; i-- > 0; ) {
          let t = document.querySelector("#columns.style-scope.ytd-watch-flexy ytd-live-chat-frame#chat");
          if (t instanceof Element)
            return t;
          if (i > 0) {
            await delayPn(200);
          }
        }
        return null;
      };
      const nsTemplateObtain = () => {
        let nsTemplate = document.querySelector("ytd-watch-flexy noscript[ns-template]");
        if (!nsTemplate) {
          nsTemplate = document.createElement("noscript");
          nsTemplate.setAttribute("ns-template", "");
          document.querySelector("ytd-watch-flexy").appendChild(nsTemplate);
        }
        return nsTemplate;
      };
      const isPageDOM = (elm, selector) => {
        if (!elm || !(elm instanceof Element) || !elm.nodeName)
          return false;
        if (!elm.closest(selector))
          return false;
        if (elm.isConnected !== true)
          return false;
        return true;
      };
      const invalidFlexyParent = (hostElement) => {
        if (hostElement instanceof HTMLElement) {
          const hasFlexyParent = HTMLElement.prototype.closest.call(hostElement, "ytd-watch-flexy");
          if (!hasFlexyParent)
            return true;
          const currentFlexy = elements.flexy;
          if (currentFlexy && currentFlexy !== hasFlexyParent)
            return true;
        }
        return false;
      };
      let headerMutationObserver = null;
      let headerMutationTmpNode = null;
      const eventMap = {
        "ceHack": () => {
          mLoaded.flag |= 2;
          document.documentElement.setAttribute111("tabview-loaded", mLoaded.makeString());
          retrieveCE("ytd-watch-flexy").then(eventMap["ytd-watch-flexy::defined"]).catch(console.warn);
          retrieveCE("ytd-expander").then(eventMap["ytd-expander::defined"]).catch(console.warn);
          retrieveCE("ytd-watch-next-secondary-results-renderer").then(eventMap["ytd-watch-next-secondary-results-renderer::defined"]).catch(console.warn);
          retrieveCE("ytd-comments-header-renderer").then(eventMap["ytd-comments-header-renderer::defined"]).catch(console.warn);
          retrieveCE("ytd-live-chat-frame").then(eventMap["ytd-live-chat-frame::defined"]).catch(console.warn);
          retrieveCE("ytd-comments").then(eventMap["ytd-comments::defined"]).catch(console.warn);
          retrieveCE("ytd-engagement-panel-section-list-renderer").then(eventMap["ytd-engagement-panel-section-list-renderer::defined"]).catch(console.warn);
          retrieveCE("ytd-watch-metadata").then(eventMap["ytd-watch-metadata::defined"]).catch(console.warn);
          retrieveCE("ytd-playlist-panel-renderer").then(eventMap["ytd-playlist-panel-renderer::defined"]).catch(console.warn);
          retrieveCE("ytd-expandable-video-description-body-renderer").then(eventMap["ytd-expandable-video-description-body-renderer::defined"]).catch(console.warn);
        },
        "fixForTabDisplay": (isResize) => {
          bFixForResizedTabLater = false;
          for (const element of document.querySelectorAll("[io-intersected]")) {
            const cnt = insp(element);
            if (element instanceof HTMLElement_ && typeof cnt.calculateCanCollapse === "function") {
              try {
                cnt.calculateCanCollapse(true);
              } catch (e) {
              }
            }
          }
          if (!isResize && lastTab === "#tab-info") {
            for (const element of document.querySelectorAll("#tab-info ytd-video-description-infocards-section-renderer, #tab-info yt-chip-cloud-renderer, #tab-info ytd-horizontal-card-list-renderer, #tab-info yt-horizontal-list-renderer")) {
              const cnt = insp(element);
              if (element instanceof HTMLElement_ && typeof cnt.notifyResize === "function") {
                try {
                  cnt.notifyResize();
                } catch (e) {
                }
              }
            }
            for (const element of document.querySelectorAll("#tab-info ytd-text-inline-expander")) {
              const cnt = insp(element);
              if (element instanceof HTMLElement_ && typeof cnt.resize === "function") {
                cnt.resize(false);
              }
              fixInlineExpanderDisplay(cnt);
            }
          }
          if (!isResize && typeof lastTab === "string" && lastTab.startsWith("#tab-")) {
            const tabContent = document.querySelector(".tab-content-cld:not(.tab-content-hidden)");
            if (tabContent) {
              const renderers = tabContent.querySelectorAll("yt-chip-cloud-renderer");
              for (const renderer of renderers) {
                const cnt = insp(renderer);
                if (typeof cnt.notifyResize === "function") {
                  try {
                    cnt.notifyResize();
                  } catch (e) {
                  }
                }
              }
            }
          }
        },
        "ytd-watch-flexy::defined": (cProto) => {
          if (!cProto.updateChatLocation498 && typeof cProto.updateChatLocation === "function" && cProto.updateChatLocation.length === 0) {
            cProto.updateChatLocation498 = cProto.updateChatLocation;
            cProto.updateChatLocation = updateChatLocation498;
          }
          if (!cProto.isTwoColumnsChanged498_ && typeof cProto.isTwoColumnsChanged_ === "function" && cProto.isTwoColumnsChanged_.length === 2) {
            cProto.isTwoColumnsChanged498_ = cProto.isTwoColumnsChanged_;
            cProto.isTwoColumnsChanged_ = function(arg1, arg2, ...args) {
              const r = secondaryInnerFn(() => {
                const r2 = this.isTwoColumnsChanged498_(arg1, arg2, ...args);
                return r2;
              });
              return r;
            };
          }
          if (!cProto.defaultTwoColumnLayoutChanged498 && typeof cProto.defaultTwoColumnLayoutChanged === "function" && cProto.defaultTwoColumnLayoutChanged.length === 0) {
            cProto.defaultTwoColumnLayoutChanged498 = cProto.defaultTwoColumnLayoutChanged;
            cProto.defaultTwoColumnLayoutChanged = function(...args) {
              const r = secondaryInnerFn(() => {
                const r2 = this.defaultTwoColumnLayoutChanged498(...args);
                return r2;
              });
              return r;
            };
          }
          if (!cProto.updatePlayerLocation498 && typeof cProto.updatePlayerLocation === "function" && cProto.updatePlayerLocation.length === 0) {
            cProto.updatePlayerLocation498 = cProto.updatePlayerLocation;
            cProto.updatePlayerLocation = function(...args) {
              const r = secondaryInnerFn(() => {
                const r2 = this.updatePlayerLocation498(...args);
                return r2;
              });
              return r;
            };
          }
          if (!cProto.updateCinematicsLocation498 && typeof cProto.updateCinematicsLocation === "function" && cProto.updateCinematicsLocation.length === 0) {
            cProto.updateCinematicsLocation498 = cProto.updateCinematicsLocation;
            cProto.updateCinematicsLocation = function(...args) {
              const r = secondaryInnerFn(() => {
                const r2 = this.updateCinematicsLocation498(...args);
                return r2;
              });
              return r;
            };
          }
          if (!cProto.updatePanelsLocation498 && typeof cProto.updatePanelsLocation === "function" && cProto.updatePanelsLocation.length === 0) {
            cProto.updatePanelsLocation498 = cProto.updatePanelsLocation;
            cProto.updatePanelsLocation = function(...args) {
              const r = secondaryInnerFn(() => {
                const r2 = this.updatePanelsLocation498(...args);
                return r2;
              });
              return r;
            };
          }
          if (!cProto.swatcherooUpdatePanelsLocation498 && typeof cProto.swatcherooUpdatePanelsLocation === "function" && cProto.swatcherooUpdatePanelsLocation.length === 6) {
            cProto.swatcherooUpdatePanelsLocation498 = cProto.swatcherooUpdatePanelsLocation;
            cProto.swatcherooUpdatePanelsLocation = function(arg1, arg2, arg3, arg4, arg5, arg6, ...args) {
              const r = secondaryInnerFn(() => {
                const r2 = this.swatcherooUpdatePanelsLocation498(arg1, arg2, arg3, arg4, arg5, arg6, ...args);
                return r2;
              });
              return r;
            };
          }
          if (!cProto.updateErrorScreenLocation498 && typeof cProto.updateErrorScreenLocation === "function" && cProto.updateErrorScreenLocation.length === 0) {
            cProto.updateErrorScreenLocation498 = cProto.updateErrorScreenLocation;
            cProto.updateErrorScreenLocation = function(...args) {
              const r = secondaryInnerFn(() => {
                const r2 = this.updateErrorScreenLocation498(...args);
                return r2;
              });
              return r;
            };
          }
          if (!cProto.updateFullBleedElementLocations498 && typeof cProto.updateFullBleedElementLocations === "function" && cProto.updateFullBleedElementLocations.length === 0) {
            cProto.updateFullBleedElementLocations498 = cProto.updateFullBleedElementLocations;
            cProto.updateFullBleedElementLocations = function(...args) {
              const r = secondaryInnerFn(() => {
                const r2 = this.updateFullBleedElementLocations498(...args);
                return r2;
              });
              return r;
            };
          }
        },
        "ytd-watch-next-secondary-results-renderer::defined": (cProto) => {
          if (!cProto.attached498 && typeof cProto.attached === "function") {
            cProto.attached498 = cProto.attached;
            cProto.attached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-watch-next-secondary-results-renderer::attached"]).catch(console.warn);
              return this.attached498();
            };
          }
          if (!cProto.detached498 && typeof cProto.detached === "function") {
            cProto.detached498 = cProto.detached;
            cProto.detached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-watch-next-secondary-results-renderer::detached"]).catch(console.warn);
              return this.detached498();
            };
          }
          makeInitAttached("ytd-watch-next-secondary-results-renderer");
        },
        "ytd-watch-next-secondary-results-renderer::attached": (hostElement) => {
          if (invalidFlexyParent(hostElement))
            return;
          DEBUG_5084 && void 0;
          if (hostElement instanceof Element)
            hostElement[__attachedSymbol__] = true;
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== true)
            return;
          if (hostElement instanceof HTMLElement_ && hostElement.matches("#columns #related ytd-watch-next-secondary-results-renderer") && !hostElement.matches("#right-tabs ytd-watch-next-secondary-results-renderer, [hidden] ytd-watch-next-secondary-results-renderer")) {
            elements.related = hostElement.closest("#related");
            hostElement.setAttribute111("tyt-videos-list", "");
          }
        },
        "ytd-watch-next-secondary-results-renderer::detached": (hostElement) => {
          DEBUG_5084 && void 0;
          if (!(hostElement instanceof HTMLElement_) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== false)
            return;
          if (hostElement.hasAttribute000("tyt-videos-list")) {
            elements.related = null;
            hostElement.removeAttribute000("tyt-videos-list");
          }
        },
        "settingCommentsVideoId": (hostElement) => {
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          const cnt = insp(hostElement);
          const commentsArea = elements.comments;
          if (commentsArea !== hostElement || hostElement.isConnected !== true || cnt.isAttached !== true || !cnt.data || cnt.hidden !== false)
            return;
          const ytdFlexyElm = elements.flexy;
          const ytdFlexyCnt = ytdFlexyElm ? insp(ytdFlexyElm) : null;
          if (ytdFlexyCnt && ytdFlexyCnt.videoId) {
            hostElement.setAttribute111("tyt-comments-video-id", ytdFlexyCnt.videoId);
          } else {
            hostElement.removeAttribute000("tyt-comments-video-id");
          }
        },
        "checkCommentsShouldBeHidden": (lockId) => {
          if (lockGet["checkCommentsShouldBeHiddenLock"] !== lockId)
            return;
          const commentsArea = elements.comments;
          const ytdFlexyElm = elements.flexy;
          if (commentsArea && ytdFlexyElm && !commentsArea.hasAttribute000("hidden")) {
            const ytdFlexyCnt = insp(ytdFlexyElm);
            if (typeof ytdFlexyCnt.videoId === "string") {
              const commentsVideoId = commentsArea.getAttribute("tyt-comments-video-id");
              if (commentsVideoId && commentsVideoId !== ytdFlexyCnt.videoId) {
                commentsArea.setAttribute111("hidden", "");
              }
            }
          }
        },
        "ytd-comments::defined": (cProto) => {
          if (!cProto.attached498 && typeof cProto.attached === "function") {
            cProto.attached498 = cProto.attached;
            cProto.attached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-comments::attached"]).catch(console.warn);
              return this.attached498();
            };
          }
          if (!cProto.detached498 && typeof cProto.detached === "function") {
            cProto.detached498 = cProto.detached;
            cProto.detached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-comments::detached"]).catch(console.warn);
              return this.detached498();
            };
          }
          cProto._createPropertyObserver("data", "_dataChanged498", void 0);
          cProto._dataChanged498 = function() {
            Promise.resolve(this.hostElement).then(eventMap["ytd-comments::_dataChanged498"]).catch(console.warn);
          };
          makeInitAttached("ytd-comments");
        },
        "ytd-comments::_dataChanged498": (hostElement) => {
          if (!hostElement.hasAttribute000("tyt-comments-area"))
            return;
          let commentsDataStatus = 0;
          const cnt = insp(hostElement);
          const data = cnt ? cnt.data : null;
          const contents = data ? data.contents : null;
          if (data) {
            if (contents && contents.length === 1 && contents[0].messageRenderer) {
              commentsDataStatus = 2;
            }
            if (contents && contents.length > 1 && contents[0].commentThreadRenderer) {
              commentsDataStatus = 1;
            }
          }
          if (commentsDataStatus) {
            hostElement.setAttribute111("tyt-comments-data-status", commentsDataStatus);
          } else {
            hostElement.removeAttribute000("tyt-comments-data-status");
          }
          Promise.resolve(hostElement).then(eventMap["settingCommentsVideoId"]).catch(console.warn);
        },
        "ytd-comments::attached": async (hostElement) => {
          if (invalidFlexyParent(hostElement))
            return;
          DEBUG_5084 && void 0;
          if (hostElement instanceof Element)
            hostElement[__attachedSymbol__] = true;
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== true)
            return;
          if (!hostElement || hostElement.id !== "comments")
            return;
          elements.comments = hostElement;
          Promise.resolve(hostElement).then(eventMap["settingCommentsVideoId"]).catch(console.warn);
          aoComment.observe(hostElement, { attributes: true });
          hostElement.setAttribute111("tyt-comments-area", "");
          const lockId = lockSet["rightTabReadyLock02"];
          await rightTabsProvidedPromise.then();
          if (lockGet["rightTabReadyLock02"] !== lockId)
            return;
          if (elements.comments !== hostElement)
            return;
          if (hostElement.isConnected === false)
            return;
          DEBUG_5085 && void 0;
          if (hostElement && !hostElement.closest("#right-tabs")) {
            document.querySelector("#tab-comments").assignChildren111(null, hostElement, null);
          } else {
            const shouldTabVisible = elements.comments && elements.comments.closest("#tab-comments") && !elements.comments.closest("[hidden]");
            document.querySelector('[tyt-tab-content="#tab-comments"]').classList.toggle("tab-btn-hidden", !shouldTabVisible);
            Promise.resolve(lockSet["removeKeepCommentsScrollerLock"]).then(removeKeepCommentsScroller).catch(console.warn);
          }
          TAB_AUTO_SWITCH_TO_COMMENTS && switchToTab("#tab-comments");
        },
        "ytd-comments::detached": (hostElement) => {
          DEBUG_5084 && void 0;
          if (!(hostElement instanceof HTMLElement_) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== false)
            return;
          if (hostElement.hasAttribute000("tyt-comments-area")) {
            hostElement.removeAttribute000("tyt-comments-area");
            aoComment.disconnect();
            aoComment.takeRecords();
            elements.comments = null;
            document.querySelector('[tyt-tab-content="#tab-comments"]').classList.add("tab-btn-hidden");
            Promise.resolve(lockSet["removeKeepCommentsScrollerLock"]).then(removeKeepCommentsScroller).catch(console.warn);
          }
        },
        "ytd-comments-header-renderer::defined": (cProto) => {
          if (!cProto.attached498 && typeof cProto.attached === "function") {
            cProto.attached498 = cProto.attached;
            cProto.attached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-comments-header-renderer::attached"]).catch(console.warn);
              Promise.resolve(this.hostElement).then(eventMap["ytd-comments-header-renderer::dataChanged"]).catch(console.warn);
              return this.attached498();
            };
          }
          if (!cProto.detached498 && typeof cProto.detached === "function") {
            cProto.detached498 = cProto.detached;
            cProto.detached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-comments-header-renderer::detached"]).catch(console.warn);
              return this.detached498();
            };
          }
          if (!cProto.dataChanged498 && typeof cProto.dataChanged === "function") {
            cProto.dataChanged498 = cProto.dataChanged;
            cProto.dataChanged = function() {
              Promise.resolve(this.hostElement).then(eventMap["ytd-comments-header-renderer::dataChanged"]).catch(console.warn);
              return this.dataChanged498();
            };
          }
          makeInitAttached("ytd-comments-header-renderer");
        },
        "ytd-comments-header-renderer::attached": (hostElement) => {
          if (invalidFlexyParent(hostElement))
            return;
          DEBUG_5084 && void 0;
          if (hostElement instanceof Element)
            hostElement[__attachedSymbol__] = true;
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== true)
            return;
          if (!hostElement || !hostElement.classList.contains("ytd-item-section-renderer"))
            return;
          const targetElement = document.querySelector("[tyt-comments-area] ytd-comments-header-renderer");
          if (hostElement === targetElement) {
            hostElement.setAttribute111("tyt-comments-header-field", "");
          } else {
            const parentNode = hostElement.parentNode;
            if (parentNode instanceof HTMLElement_ && parentNode.querySelector("[tyt-comments-header-field]")) {
              hostElement.setAttribute111("tyt-comments-header-field", "");
            }
          }
        },
        "ytd-comments-header-renderer::detached": (hostElement) => {
          DEBUG_5084 && void 0;
          if (!(hostElement instanceof HTMLElement_) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== false)
            return;
          if (hostElement.hasAttribute000("field-of-cm-count")) {
            hostElement.removeAttribute000("field-of-cm-count");
            const cmCount = document.querySelector("#tyt-cm-count");
            if (cmCount && !document.querySelector("#tab-comments ytd-comments-header-renderer[field-of-cm-count]")) {
              cmCount.textContent = "";
            }
          }
          if (hostElement.hasAttribute000("tyt-comments-header-field")) {
            hostElement.removeAttribute000("tyt-comments-header-field");
          }
        },
        "ytd-comments-header-renderer::dataChanged": (hostElement) => {
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          const ytdFlexyElm = elements.flexy;
          let b = false;
          const cnt = insp(hostElement);
          if (cnt && hostElement.closest("#tab-comments") && document.querySelector("#tab-comments ytd-comments-header-renderer") === hostElement) {
            b = true;
          } else if (hostElement instanceof HTMLElement_ && hostElement.parentNode instanceof HTMLElement_ && hostElement.parentNode.querySelector("[tyt-comments-header-field]")) {
            b = true;
          }
          if (b) {
            hostElement.setAttribute111("tyt-comments-header-field", "");
            ytdFlexyElm && ytdFlexyElm.removeAttribute000("tyt-comment-disabled");
          }
          if (hostElement.hasAttribute000("tyt-comments-header-field") && hostElement.isConnected === true) {
            if (!headerMutationObserver) {
              headerMutationObserver = new MutationObserver(eventMap["ytd-comments-header-renderer::deferredCounterUpdate"]);
            }
            headerMutationObserver.observe(hostElement.parentNode, { subtree: false, childList: true });
            if (!headerMutationTmpNode)
              headerMutationTmpNode = document.createElementNS("http://www.w3.org/2000/svg", "defs");
            const tmpNode = headerMutationTmpNode;
            hostElement.insertAdjacentElement("afterend", tmpNode);
            tmpNode.remove();
          }
        },
        "ytd-comments-header-renderer::deferredCounterUpdate": () => {
          const nodes = document.querySelectorAll("#tab-comments ytd-comments-header-renderer[class]");
          if (nodes.length === 1) {
            const hostElement = nodes[0];
            const cnt = insp(hostElement);
            const data = cnt.data;
            if (!data)
              return;
            let ez = "";
            if (data.commentsCount && data.commentsCount.runs && data.commentsCount.runs.length >= 1) {
              let max = -1;
              const z = data.commentsCount.runs.map((e) => {
                let c = e.text.replace(/\D+/g, "").length;
                if (c > max)
                  max = c;
                return [e.text, c];
              }).filter((a) => a[1] === max);
              if (z.length >= 1) {
                ez = z[0][0];
              }
            } else if (data.countText && data.countText.runs && data.countText.runs.length >= 1) {
              let max = -1;
              const z = data.countText.runs.map((e) => {
                let c = e.text.replace(/\D+/g, "").length;
                if (c > max)
                  max = c;
                return [e.text, c];
              }).filter((a) => a[1] === max);
              if (z.length >= 1) {
                ez = z[0][0];
              }
            }
            const cmCount = document.querySelector("#tyt-cm-count");
            if (ez) {
              hostElement.setAttribute111("field-of-cm-count", "");
              cmCount && (cmCount.textContent = ez.trim());
            } else {
              hostElement.removeAttribute000("field-of-cm-count");
              cmCount && (cmCount.textContent = "");
            }
          }
        },
        "ytd-expander::defined": (cProto) => {
          if (!cProto.attached498 && typeof cProto.attached === "function") {
            cProto.attached498 = cProto.attached;
            cProto.attached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-expander::attached"]).catch(console.warn);
              return this.attached498();
            };
          }
          if (!cProto.detached498 && typeof cProto.detached === "function") {
            cProto.detached498 = cProto.detached;
            cProto.detached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-expander::detached"]).catch(console.warn);
              return this.detached498();
            };
          }
          if (!cProto.calculateCanCollapse498 && typeof cProto.calculateCanCollapse === "function") {
            cProto.calculateCanCollapse498 = cProto.calculateCanCollapse;
            cProto.calculateCanCollapse = funcCanCollapse;
          }
          if (!cProto.childrenChanged498 && typeof cProto.childrenChanged === "function") {
            cProto.childrenChanged498 = cProto.childrenChanged;
            cProto.childrenChanged = function() {
              Promise.resolve(this.hostElement).then(eventMap["ytd-expander::childrenChanged"]).catch(console.warn);
              return this.childrenChanged498();
            };
          }
          makeInitAttached("ytd-expander");
        },
        "ytd-expander::childrenChanged": (hostElement) => {
          if (hostElement instanceof Node && hostElement.hasAttribute000("hidden") && hostElement.hasAttribute000("tyt-main-info") && hostElement.firstElementChild) {
            hostElement.removeAttribute("hidden");
          }
        },
        "ytd-expandable-video-description-body-renderer::defined": (cProto) => {
          if (!cProto.attached498 && typeof cProto.attached === "function") {
            cProto.attached498 = cProto.attached;
            cProto.attached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-expandable-video-description-body-renderer::attached"]).catch(console.warn);
              return this.attached498();
            };
          }
          if (!cProto.detached498 && typeof cProto.detached === "function") {
            cProto.detached498 = cProto.detached;
            cProto.detached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-expandable-video-description-body-renderer::detached"]).catch(console.warn);
              return this.detached498();
            };
          }
          makeInitAttached("ytd-expandable-video-description-body-renderer");
        },
        "ytd-expandable-video-description-body-renderer::attached": async (hostElement) => {
          if (hostElement instanceof HTMLElement_ && isPageDOM(hostElement, "[tyt-info-renderer]") && !hostElement.matches("[tyt-main-info]")) {
            elements.infoExpander = hostElement;
            infoExpanderElementProvidedPromise.resolve();
            hostElement.setAttribute111("tyt-main-info", "");
            if (plugin.autoExpandInfoDesc.toUse) {
              plugin.autoExpandInfoDesc.onMainInfoSet(hostElement);
            }
            const lockId = lockSet["rightTabReadyLock03"];
            await rightTabsProvidedPromise.then();
            if (lockGet["rightTabReadyLock03"] !== lockId)
              return;
            if (elements.infoExpander !== hostElement)
              return;
            if (hostElement.isConnected === false)
              return;
            elements.infoExpander.classList.add("tyt-main-info");
            const infoExpander = elements.infoExpander;
            const inlineExpanderElm = infoExpander.querySelector("ytd-text-inline-expander");
            if (inlineExpanderElm) {
              const mo = new MutationObserver(() => {
                const p = document.querySelector("#tab-info ytd-text-inline-expander");
                sessionStorage.__$tmp_UseAutoExpandInfoDesc$__ = p && p.hasAttribute("is-expanded") ? "1" : "";
                if (p)
                  fixInlineExpanderContent();
              });
              mo.observe(inlineExpanderElm, { attributes: ["is-expanded", "attr-6v8qu", "hidden"], subtree: true });
              inlineExpanderElm.incAttribute111("attr-6v8qu");
              const cnt = insp(inlineExpanderElm);
              if (cnt)
                fixInlineExpanderDisplay(cnt);
            }
            if (infoExpander && !infoExpander.closest("#right-tabs")) {
              document.querySelector("#tab-info").assignChildren111(null, infoExpander, null);
            } else {
              if (document.querySelector('[tyt-tab-content="#tab-info"]')) {
                const shouldTabVisible = elements.infoExpander && elements.infoExpander.closest("#tab-info");
                document.querySelector('[tyt-tab-content="#tab-info"]').classList.toggle("tab-btn-hidden", !shouldTabVisible);
              }
            }
            Promise.resolve(lockSet["infoFixLock"]).then(infoFix).catch(console.warn);
          }
          DEBUG_5084 && void 0;
          if (hostElement instanceof Element)
            hostElement[__attachedSymbol__] = true;
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== true)
            return;
          if (isPageDOM(hostElement, "#tab-info [tyt-main-info]")) {
          } else if (!hostElement.closest("#tab-info")) {
            const bodyRenderer = hostElement;
            let bodyRendererNew = document.querySelector("ytd-expandable-video-description-body-renderer[tyt-info-renderer]");
            if (!bodyRendererNew) {
              bodyRendererNew = document.createElement("ytd-expandable-video-description-body-renderer");
              bodyRendererNew.setAttribute("tyt-info-renderer", "");
              nsTemplateObtain().appendChild(bodyRendererNew);
            }
            const cnt = insp(bodyRendererNew);
            cnt.data = Object.assign({}, insp(bodyRenderer).data);
            const inlineExpanderElm = bodyRendererNew.querySelector("ytd-text-inline-expander");
            const inlineExpanderCnt = insp(inlineExpanderElm);
            fixInlineExpanderMethods(inlineExpanderCnt);
            elements.infoExpanderRendererBack = bodyRenderer;
            elements.infoExpanderRendererFront = bodyRendererNew;
            bodyRenderer.setAttribute("tyt-info-renderer-back", "");
            bodyRendererNew.setAttribute("tyt-info-renderer-front", "");
          }
        },
        "ytd-expandable-video-description-body-renderer::detached": async (hostElement) => {
          if (!(hostElement instanceof HTMLElement_) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== false)
            return;
          if (hostElement.hasAttribute000("tyt-main-info")) {
            DEBUG_5084 && void 0;
            elements.infoExpander = null;
            hostElement.removeAttribute000("tyt-main-info");
          }
        },
        "ytd-expander::attached": async (hostElement) => {
          if (invalidFlexyParent(hostElement))
            return;
          if (hostElement instanceof Element)
            hostElement[__attachedSymbol__] = true;
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== true)
            return;
          if (hostElement instanceof HTMLElement_ && hostElement.matches("[tyt-comments-area] #contents ytd-expander#expander") && !hostElement.matches("[hidden] ytd-expander#expander")) {
            hostElement.setAttribute111("tyt-content-comment-entry", "");
            ioComment.observe(hostElement);
          }
        },
        "ytd-expander::detached": (hostElement) => {
          if (!(hostElement instanceof HTMLElement_) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== false)
            return;
          if (hostElement.hasAttribute000("tyt-content-comment-entry")) {
            ioComment.unobserve(hostElement);
            hostElement.removeAttribute000("tyt-content-comment-entry");
          } else if (hostElement.hasAttribute000("tyt-main-info")) {
            DEBUG_5084 && void 0;
            elements.infoExpander = null;
            hostElement.removeAttribute000("tyt-main-info");
          }
        },
        "ytd-live-chat-frame::defined": (cProto) => {
          let lastDomAction = 0;
          if (!cProto.attached498 && typeof cProto.attached === "function") {
            cProto.attached498 = cProto.attached;
            cProto.attached = function() {
              lastDomAction = Date.now();
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-live-chat-frame::attached"]).catch(console.warn);
              return this.attached498();
            };
          }
          if (!cProto.detached498 && typeof cProto.detached === "function") {
            cProto.detached498 = cProto.detached;
            cProto.detached = function() {
              lastDomAction = Date.now();
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-live-chat-frame::detached"]).catch(console.warn);
              return this.detached498();
            };
          }
          if (typeof cProto.urlChanged === "function" && !cProto.urlChanged66 && !cProto.urlChangedAsync12 && cProto.urlChanged.length === 0) {
            cProto.urlChanged66 = cProto.urlChanged;
            let ath = 0;
            cProto.urlChangedAsync12 = async function() {
              await this.__urlChangedAsyncT689__;
              const t = ath = (ath & 1073741823) + 1;
              const chatframe = this.chatframe || (this.$ || 0).chatframe || 0;
              if (chatframe instanceof HTMLIFrameElement) {
                if (chatframe.contentDocument === null) {
                  await Promise.resolve("#").catch(console.warn);
                  if (t !== ath)
                    return;
                }
                await new Promise((resolve) => setTimeout_(resolve, 1)).catch(console.warn);
                if (t !== ath)
                  return;
                const isBlankPage = !this.data || this.collapsed;
                const p1 = new Promise((resolve) => setTimeout_(resolve, 706)).catch(console.warn);
                const p2 = new Promise((resolve) => {
                  new IntersectionObserver((entries, observer) => {
                    for (const entry of entries) {
                      const rect = entry.boundingClientRect || 0;
                      if (isBlankPage || rect.width > 0 && rect.height > 0) {
                        observer.disconnect();
                        resolve("#");
                        break;
                      }
                    }
                  }).observe(chatframe);
                }).catch(console.warn);
                await Promise.race([p1, p2]);
                if (t !== ath)
                  return;
              }
              this.urlChanged66();
            };
            cProto.urlChanged = function() {
              const t = this.__urlChangedAsyncT688__ = (this.__urlChangedAsyncT688__ & 1073741823) + 1;
              nextBrowserTick(() => {
                if (t !== this.__urlChangedAsyncT688__)
                  return;
                this.urlChangedAsync12();
              });
            };
          }
          makeInitAttached("ytd-live-chat-frame");
        },
        "ytd-live-chat-frame::attached": async (hostElement) => {
          if (invalidFlexyParent(hostElement))
            return;
          DEBUG_5084 && void 0;
          if (hostElement instanceof Element)
            hostElement[__attachedSymbol__] = true;
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== true)
            return;
          if (!hostElement || hostElement.id !== "chat")
            return;
          const lockId = lockSet["ytdLiveAttachedLock"];
          const chatElem = await getGeneralChatElement();
          if (lockGet["ytdLiveAttachedLock"] !== lockId)
            return;
          if (chatElem === hostElement) {
            elements.chat = chatElem;
            aoChat.observe(chatElem, { attributes: true });
            const isFlexyReady = elements.flexy instanceof Element;
            chatElem.setAttribute111("tyt-active-chat-frame", isFlexyReady ? "CF" : "C");
            const chatContainer = chatElem ? chatElem.closest("#chat-container") || chatElem : null;
            if (chatContainer && !chatContainer.hasAttribute000("tyt-chat-container")) {
              for (const p2 of document.querySelectorAll("[tyt-chat-container]")) {
                p2.removeAttribute000("[tyt-chat-container]");
              }
              chatContainer.setAttribute111("tyt-chat-container", "");
            }
            const cnt = insp(hostElement);
            const q = cnt.__urlChangedAsyncT688__;
            const p = cnt.__urlChangedAsyncT689__ = new PromiseExternal();
            setTimeout_(() => {
              if (p !== cnt.__urlChangedAsyncT689__)
                return;
              if (cnt.isAttached === true && hostElement.isConnected === true) {
                p.resolve();
                if (q === cnt.__urlChangedAsyncT688__) {
                  cnt.urlChanged();
                }
              }
            }, 320);
            Promise.resolve(lockSet["layoutFixLock"]).then(layoutFix);
          } else {
          }
        },
        "ytd-live-chat-frame::detached": (hostElement) => {
          DEBUG_5084 && void 0;
          if (!(hostElement instanceof HTMLElement_) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== false)
            return;
          if (hostElement.hasAttribute000("tyt-active-chat-frame")) {
            aoChat.disconnect();
            aoChat.takeRecords();
            hostElement.removeAttribute000("tyt-active-chat-frame");
            elements.chat = null;
            const ytdFlexyElm = elements.flexy;
            if (ytdFlexyElm) {
              ytdFlexyElm.removeAttribute000("tyt-chat-collapsed");
              ytdFlexyElm.setAttribute111("tyt-chat", "");
            }
          }
        },
        "ytd-engagement-panel-section-list-renderer::defined": (cProto) => {
          if (!cProto.attached498 && typeof cProto.attached === "function") {
            cProto.attached498 = cProto.attached;
            cProto.attached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-engagement-panel-section-list-renderer::attached"]).catch(console.warn);
              return this.attached498();
            };
          }
          if (!cProto.detached498 && typeof cProto.detached === "function") {
            cProto.detached498 = cProto.detached;
            cProto.detached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-engagement-panel-section-list-renderer::detached"]).catch(console.warn);
              return this.detached498();
            };
          }
          makeInitAttached("ytd-engagement-panel-section-list-renderer");
        },
        "ytd-engagement-panel-section-list-renderer::bindTarget": (hostElement) => {
          if (hostElement.matches("#panels.ytd-watch-flexy > ytd-engagement-panel-section-list-renderer[target-id][visibility]")) {
            hostElement.setAttribute111("tyt-egm-panel", "");
            Promise.resolve(lockSet["updateEgmPanelsLock"]).then(updateEgmPanels).catch(console.warn);
            aoEgmPanels.observe(hostElement, { attributes: true, attributeFilter: ["visibility", "hidden"] });
          }
        },
        "ytd-engagement-panel-section-list-renderer::attached": (hostElement) => {
          if (invalidFlexyParent(hostElement))
            return;
          DEBUG_5084 && void 0;
          if (hostElement instanceof Element)
            hostElement[__attachedSymbol__] = true;
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== true)
            return;
          if (!hostElement.matches("#panels.ytd-watch-flexy > ytd-engagement-panel-section-list-renderer"))
            return;
          if (hostElement.getAttribute("target-id") === null && hostElement.hasAttribute("visibility") && hostElement.matches('#panels.ytd-watch-flexy > ytd-engagement-panel-section-list-renderer[visibility*="ENGAGEMENT_PANEL_VISIBILITY_"]')) {
            let tid = "";
            try {
              tid = crypto.randomUUID();
            } catch {
              tid = Date.now().toString(36) + "-" + Math.random().toString(36).substring(2);
            }
            hostElement.setAttribute000("target-id", "tid051-" + tid);
          }
          if (hostElement.hasAttribute000("target-id") && hostElement.hasAttribute000("visibility")) {
            Promise.resolve(hostElement).then(eventMap["ytd-engagement-panel-section-list-renderer::bindTarget"]).catch(console.warn);
          } else {
            hostElement.setAttribute000("tyt-egm-panel-jclmd", "");
            moEgmPanelReady.observe(hostElement, { attributes: true, attributeFilter: ["visibility", "target-id"] });
          }
        },
        "ytd-engagement-panel-section-list-renderer::detached": (hostElement) => {
          DEBUG_5084 && void 0;
          if (!(hostElement instanceof HTMLElement_) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== false)
            return;
          if (hostElement.hasAttribute000("tyt-egm-panel")) {
            hostElement.removeAttribute000("tyt-egm-panel");
            Promise.resolve(lockSet["updateEgmPanelsLock"]).then(updateEgmPanels).catch(console.warn);
          } else if (hostElement.hasAttribute000("tyt-egm-panel-jclmd")) {
            hostElement.removeAttribute000("tyt-egm-panel-jclmd");
            moEgmPanelReadyClearFn();
          }
        },
        "ytd-watch-metadata::defined": (cProto) => {
          if (!cProto.attached498 && typeof cProto.attached === "function") {
            cProto.attached498 = cProto.attached;
            cProto.attached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-watch-metadata::attached"]).catch(console.warn);
              return this.attached498();
            };
          }
          if (!cProto.detached498 && typeof cProto.detached === "function") {
            cProto.detached498 = cProto.detached;
            cProto.detached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-watch-metadata::detached"]).catch(console.warn);
              return this.detached498();
            };
          }
          makeInitAttached("ytd-watch-metadata");
        },
        "ytd-watch-metadata::attached": (hostElement) => {
          if (invalidFlexyParent(hostElement))
            return;
          DEBUG_5084 && void 0;
          if (hostElement instanceof Element)
            hostElement[__attachedSymbol__] = true;
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== true)
            return;
          if (plugin.fullChannelNameOnHover.activated)
            plugin.fullChannelNameOnHover.onNavigateFinish();
        },
        "ytd-watch-metadata::detached": (hostElement) => {
          DEBUG_5084 && void 0;
          if (!(hostElement instanceof HTMLElement_) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== false)
            return;
        },
        "ytd-playlist-panel-renderer::defined": (cProto) => {
          if (!cProto.attached498 && typeof cProto.attached === "function") {
            cProto.attached498 = cProto.attached;
            cProto.attached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-playlist-panel-renderer::attached"]).catch(console.warn);
              return this.attached498();
            };
          }
          if (!cProto.detached498 && typeof cProto.detached === "function") {
            cProto.detached498 = cProto.detached;
            cProto.detached = function() {
              if (!inPageRearrange)
                Promise.resolve(this.hostElement).then(eventMap["ytd-playlist-panel-renderer::detached"]).catch(console.warn);
              return this.detached498();
            };
          }
          makeInitAttached("ytd-playlist-panel-renderer");
        },
        "ytd-playlist-panel-renderer::attached": (hostElement) => {
          if (invalidFlexyParent(hostElement))
            return;
          DEBUG_5084 && void 0;
          if (hostElement instanceof Element)
            hostElement[__attachedSymbol__] = true;
          if (!(hostElement instanceof HTMLElement_) || !(hostElement.classList.length > 0) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== true)
            return;
          elements.playlist = hostElement;
          aoPlayList.observe(hostElement, { attributes: true, attributeFilter: ["hidden", "collapsed", "attr-1y6nu"] });
          hostElement.incAttribute111("attr-1y6nu");
        },
        "ytd-playlist-panel-renderer::detached": (hostElement) => {
          DEBUG_5084 && void 0;
          if (!(hostElement instanceof HTMLElement_) || hostElement.closest("noscript"))
            return;
          if (hostElement.isConnected !== false)
            return;
        },
        "_yt_playerProvided": () => {
          mLoaded.flag |= 4;
          document.documentElement.setAttribute111("tabview-loaded", mLoaded.makeString());
        },
        "relatedElementProvided": (target) => {
          if (target.closest("[hidden]"))
            return;
          elements.related = target;
          videosElementProvidedPromise.resolve();
        },
        "onceInfoExpanderElementProvidedPromised": () => {
          const ytdFlexyElm = elements.flexy;
          if (ytdFlexyElm) {
            ytdFlexyElm.setAttribute111("hide-default-text-inline-expander", "");
          }
        },
        "refreshSecondaryInner": (lockId) => {
          if (lockGet["refreshSecondaryInnerLock"] !== lockId)
            return;
          const ytdFlexyElm = elements.flexy;
          if (ytdFlexyElm && ytdFlexyElm.matches("ytd-watch-flexy[theater][full-bleed-player]:not([full-bleed-no-max-width-columns])")) {
            ytdFlexyElm.setAttribute111("full-bleed-no-max-width-columns", "");
          }
          const related = elements.related;
          if (related && related.isConnected && !related.closest("#right-tabs #tab-videos")) {
            document.querySelector("#tab-videos").assignChildren111(null, related, null);
          }
          const infoExpander = elements.infoExpander;
          if (infoExpander && infoExpander.isConnected && !infoExpander.closest("#right-tabs #tab-info")) {
            document.querySelector("#tab-info").assignChildren111(null, infoExpander, null);
          } else {
          }
          const commentsArea = elements.comments;
          if (commentsArea) {
            const isConnected = commentsArea.isConnected;
            if (isConnected && !commentsArea.closest("#right-tabs #tab-comments")) {
              const tab = document.querySelector("#tab-comments");
              tab.assignChildren111(null, commentsArea, null);
            } else {
            }
          }
        },
        "yt-navigate-finish": (evt) => {
          const ytdAppElm = document.querySelector("ytd-page-manager#page-manager.style-scope.ytd-app");
          const ytdAppCnt = insp(ytdAppElm);
          pageType = ytdAppCnt ? (ytdAppCnt.data || 0).page : null;
          if (!document.querySelector("ytd-watch-flexy #player"))
            return;
          const flexyArr = [...document.querySelectorAll("ytd-watch-flexy")].filter((e) => !e.closest("[hidden]") && e.querySelector("#player"));
          if (flexyArr.length === 1) {
            elements.flexy = flexyArr[0];
            if (isRightTabsInserted) {
              deferAfterFirstPaint(() => {
                Promise.resolve(lockSet["refreshSecondaryInnerLock"]).then(eventMap["refreshSecondaryInner"]).catch(console.warn);
                Promise.resolve(lockSet["removeKeepCommentsScrollerLock"]).then(removeKeepCommentsScroller).catch(console.warn);
              });
            } else {
              navigateFinishedPromise.resolve();
              if (plugin.minibrowser.toUse)
                plugin.minibrowser.activate();
              if (plugin.autoExpandInfoDesc.toUse)
                plugin.autoExpandInfoDesc.activate();
              if (plugin.fullChannelNameOnHover.toUse)
                plugin.fullChannelNameOnHover.activate();
            }
            const chat = elements.chat;
            if (chat instanceof Element) {
              chat.setAttribute111("tyt-active-chat-frame", "CF");
            }
            const infoExpander = elements.infoExpander;
            if (infoExpander && infoExpander.closest("#right-tabs")) {
              deferAfterFirstPaint(() => Promise.resolve(lockSet["infoFixLock"]).then(infoFix).catch(console.warn));
            }
            deferAfterFirstPaint(() => Promise.resolve(lockSet["layoutFixLock"]).then(layoutFix).catch(console.warn));
            if (plugin.fullChannelNameOnHover.activated)
              plugin.fullChannelNameOnHover.onNavigateFinish();
          }
        },
        "onceInsertRightTabs": () => {
          const related = elements.related;
          let rightTabs = document.querySelector("#right-tabs");
          if (!document.querySelector("#right-tabs") && related) {
            getLangForPage();
            let docTmp = document.createElement("template");
            docTmp.innerHTML = createHTML(getTabsHTML());
            let newElm = docTmp.content.firstElementChild;
            if (newElm !== null) {
              inPageRearrange = true;
              related.parentNode.insertBefore000(newElm, related);
              inPageRearrange = false;
            }
            rightTabs = newElm;
            rightTabs.querySelector('[tyt-tab-content="#tab-comments"]').classList.add("tab-btn-hidden");
            const secondaryWrapper = document.createElement("secondary-wrapper");
            secondaryWrapper.classList.add("tabview-secondary-wrapper");
            secondaryWrapper.id = "secondary-inner-wrapper";
            const secondaryInner = document.querySelector("#secondary-inner.style-scope.ytd-watch-flexy");
            inPageRearrange = true;
            secondaryWrapper.replaceChildren000(...secondaryInner.childNodes);
            secondaryInner.insertBefore000(secondaryWrapper, secondaryInner.firstChild);
            inPageRearrange = false;
            rightTabs.querySelector("#material-tabs").addEventListener("click", eventMap["tabs-btn-click"], true);
            inPageRearrange = true;
            if (!rightTabs.closest("secondary-wrapper"))
              secondaryWrapper.appendChild000(rightTabs);
            inPageRearrange = false;
          }
          if (rightTabs) {
            isRightTabsInserted = true;
            const ioTabBtns = new IntersectionObserver((entries) => {
              for (const entry of entries) {
                const rect = entry.boundingClientRect;
                entry.target.classList.toggle("tab-btn-visible", rect.width && rect.height);
              }
            }, { rootMargin: "0px" });
            for (const btn of document.querySelectorAll(".tab-btn[tyt-tab-content]")) {
              ioTabBtns.observe(btn);
            }
            if (!related.closest("#right-tabs")) {
              document.querySelector("#tab-videos").assignChildren111(null, related, null);
            }
            const infoExpander = elements.infoExpander;
            if (infoExpander && !infoExpander.closest("#right-tabs")) {
              document.querySelector("#tab-info").assignChildren111(null, infoExpander, null);
            }
            const commentsArea = elements.comments;
            if (commentsArea && !commentsArea.closest("#right-tabs")) {
              document.querySelector("#tab-comments").assignChildren111(null, commentsArea, null);
            }
            rightTabsProvidedPromise.resolve();
            roRightTabs.disconnect();
            roRightTabs.observe(rightTabs);
            const ytdFlexyElm = elements.flexy;
            const aoFlexy = new MutationObserver(eventMap["aoFlexyFn"]);
            aoFlexy.observe(ytdFlexyElm, { attributes: true });
            Promise.resolve(lockSet["fixInitialTabStateLock"]).then(eventMap["fixInitialTabStateFn"]).catch(console.warn);
            ytdFlexyElm.incAttribute111("attr-7qlsy");
          }
        },
        "aoFlexyFn": () => {
          Promise.resolve(lockSet["checkCommentsShouldBeHiddenLock"]).then(eventMap["checkCommentsShouldBeHidden"]).catch(console.warn);
          Promise.resolve(lockSet["refreshSecondaryInnerLock"]).then(eventMap["refreshSecondaryInner"]).catch(console.warn);
          Promise.resolve(lockSet["tabsStatusCorrectionLock"]).then(eventMap["tabsStatusCorrection"]).catch(console.warn);
          const videoId = getCurrentVideoId();
          if (videoId !== tmpLastVideoId) {
            tmpLastVideoId = videoId;
            Promise.resolve(lockSet["updateOnVideoIdChangedLock"]).then(eventMap["updateOnVideoIdChanged"]).catch(console.warn);
          }
        },
        "twoColumnChanged10": (lockId) => {
          if (lockId !== lockGet["twoColumnChanged10Lock"])
            return;
          for (const continuation of document.querySelectorAll("#tab-videos ytd-watch-next-secondary-results-renderer ytd-continuation-item-renderer")) {
            if (continuation.closest("[hidden]"))
              continue;
            const cnt = insp(continuation);
            if (typeof cnt.showButton === "boolean") {
              if (cnt.showButton === false)
                continue;
              cnt.showButton = false;
              const behavior = cnt.ytRendererBehavior || cnt;
              if (typeof behavior.invalidate === "function") {
                behavior.invalidate(false);
              }
            }
          }
        },
        "tabsStatusCorrection": (lockId) => {
          if (lockId !== lockGet["tabsStatusCorrectionLock"])
            return;
          const ytdFlexyElm = elements.flexy;
          if (!ytdFlexyElm)
            return;
          const p = tabAStatus;
          const q = calculationFn(p, 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 4096);
          let resetForPanelDisappeared = false;
          if (p !== q) {
            let actioned = false;
            let special = 0;
            if (plugin["external.ytlstm"].activated) {
              if (q & 64) {
              } else if ((p & (1 | 2 | 4 | 8 | 16 | 4096)) === (1 | 0 | 0 | 8 | 16 | 4096) && (q & (1 | 2 | 4 | 8 | 16 | 4096)) === (1 | 0 | 4 | 0 | 16 | 4096)) {
                special = 3;
              } else if ((q & (1 | 16)) === (1 | 16) && document.querySelector("[data-ytlstm-theater-mode]")) {
                special = 1;
              } else if ((q & (1 | 8 | 16)) === (1 | 8 | 16) && document.querySelector('[is-two-columns_][theater][tyt-chat="+"]')) {
                special = 2;
              }
            }
            if (special) {
            } else if ((p & 128) === 0 && (q & 128) === 128) {
              lastPanel = "playlist";
            } else if ((p & 8) === 0 && (q & 8) === 8) {
              lastPanel = "chat";
            } else if (((p & 4) == 4 && (q & (4 | 8)) == (0 | 0) || (p & 8) == 8 && (q & (4 | 8)) === (0 | 0)) && lastPanel === "chat") {
              lastPanel = lastTab || "";
              resetForPanelDisappeared = true;
            } else if ((p & (4 | 8)) === 8 && (q & (4 | 8)) === 4 && lastPanel === "chat") {
              lastPanel = lastTab || "";
              resetForPanelDisappeared = true;
            } else if ((p & 128) === 128 && (q & 128) === 0 && lastPanel === "playlist") {
              lastPanel = lastTab || "";
              resetForPanelDisappeared = true;
            }
            tabAStatus = q;
            if (special) {
              if (special === 1) {
                if (ytdFlexyElm.getAttribute("tyt-chat") !== "+") {
                  ytBtnExpandChat();
                }
                if (ytdFlexyElm.getAttribute("tyt-tab")) {
                  switchToTab(null);
                }
              } else if (special === 2) {
                ytBtnCollapseChat();
              } else if (special === 3) {
                ytBtnCancelTheater();
                if (lastTab) {
                  switchToTab(lastTab);
                }
              }
              return;
            }
            let bFixForResizedTab = false;
            if ((q ^ 2) === 2 && bFixForResizedTabLater) {
              bFixForResizedTab = true;
            }
            if ((p & 16) === 16 & (q & 16) === 0) {
              Promise.resolve(lockSet["twoColumnChanged10Lock"]).then(eventMap["twoColumnChanged10"]).catch(console.warn);
            }
            if ((p & 2) === 2 ^ (q & 2) === 2 && (q & 2) === 2) {
              bFixForResizedTab = true;
            }
            if ((p & 2) === 0 && (q & 2) === 2 && (p & 128) === 128 && (q & 128) === 128) {
              lastPanel = lastTab || "";
              ytBtnClosePlaylist();
              actioned = true;
            }
            if ((p & (8 | 128)) === (0 | 128) && (q & (8 | 128)) === (8 | 128) && lastPanel === "chat") {
              lastPanel = lastTab || "";
              ytBtnClosePlaylist();
              actioned = true;
            }
            if ((p & (1 | 2 | 4 | 8 | 16 | 32 | 64 | 128)) === (1 | 2 | 0 | 8 | 16) && (q & (1 | 2 | 4 | 8 | 16 | 32 | 64 | 128)) === (0 | 2 | 0 | 8 | 16)) {
              lastPanel = lastTab || "";
              ytBtnCollapseChat();
              actioned = true;
            }
            if ((p & (2 | 128)) === (2 | 0) && (q & (2 | 128)) === (2 | 128) && lastPanel === "playlist") {
              switchToTab(null);
              actioned = true;
            }
            if ((p & (8 | 128)) === (8 | 0) && (q & (8 | 128)) === (8 | 128) && lastPanel === "playlist") {
              lastPanel = lastTab || "";
              ytBtnCollapseChat();
              actioned = true;
            }
            if ((p & (1 | 16 | 128)) == (1 | 16) && (q & (1 | 16 | 128)) == (1 | 16 | 128)) {
              ytBtnCancelTheater();
              actioned = true;
            }
            if ((p & (1 | 16 | 128)) == (16 | 128) && (q & (1 | 16 | 128)) == (1 | 16 | 128)) {
              lastPanel = lastTab || "";
              ytBtnClosePlaylist();
              actioned = true;
            }
            if ((q & 64) === 64) {
              actioned = false;
            } else if ((p & 64) == 64 && (q & 64) === 0) {
              if ((q & 32) === 32) {
                ytBtnCloseEngagementPanels();
              }
              if ((q & (2 | 8)) === (2 | 8)) {
                if (lastPanel === "chat") {
                  switchToTab(null);
                  actioned = true;
                } else if (lastPanel) {
                  ytBtnCollapseChat();
                  actioned = true;
                }
              }
            } else if ((p & (1 | 2 | 8 | 16 | 32)) === (1 | 0 | 0 | 16 | 0) && (q & (1 | 2 | 8 | 16 | 32)) === (1 | 0 | 8 | 16 | 0)) {
              ytBtnCancelTheater();
              actioned = true;
            } else if ((p & (1 | 16 | 32)) === (0 | 16 | 0) && (q & (1 | 16 | 32)) === (0 | 16 | 32) && (q & (2 | 8)) > 0) {
              if (q & 2) {
                switchToTab(null);
                actioned = true;
              }
              if (q & 8) {
                ytBtnCollapseChat();
                actioned = true;
              }
            } else if ((p & (1 | 16 | 8 | 2)) === (16 | 8) && (q & (1 | 16 | 8 | 2)) === 16 && (q & 128) === 0) {
              if (lastTab) {
                switchToTab(lastTab);
                actioned = true;
              }
            } else if ((p & 1) === 0 && (q & 1) === 1) {
              if ((q & 32) === 32) {
                ytBtnCloseEngagementPanels();
              }
              if ((p & 9) === 8 && (q & 9) === 9) {
                ytBtnCollapseChat();
              }
              switchToTab(null);
              actioned = true;
            } else if ((p & 3) === 1 && (q & 3) === 3) {
              ytBtnCancelTheater();
              actioned = true;
            } else if ((p & 10) === 2 && (q & 10) === 10) {
              switchToTab(null);
              actioned = true;
            } else if ((p & (8 | 32)) === (0 | 32) && (q & (8 | 32)) === (8 | 32)) {
              ytBtnCloseEngagementPanels();
              actioned = true;
            } else if ((p & (2 | 32)) === (0 | 32) && (q & (2 | 32)) === (2 | 32)) {
              ytBtnCloseEngagementPanels();
              actioned = true;
            } else if ((p & (2 | 8)) === (0 | 8) && (q & (2 | 8)) === (2 | 8)) {
              ytBtnCollapseChat();
              actioned = true;
            } else if ((p & 1) === 1 && (q & (1 | 32)) === (0 | 0)) {
              if (lastPanel === "chat") {
                ytBtnExpandChat();
                actioned = true;
              } else if (lastPanel === lastTab && lastTab) {
                switchToTab(lastTab);
                actioned = true;
              }
            }
            if (!actioned && (q & 128) === 128) {
              lastPanel = "playlist";
              if ((q & 2) === 2) {
                switchToTab(null);
                actioned = true;
              }
            }
            let shouldDoAutoFix = false;
            if ((p & 2) === 2 && (q & (2 | 128)) === (0 | 128)) {
            } else if ((p & 8) === 8 && (q & (8 | 128)) === (0 | 128)) {
            } else if (!actioned && (p & (1 | 16)) === 16 && (q & (1 | 16 | 8 | 2 | 32 | 64)) === (16 | 0 | 0)) {
              shouldDoAutoFix = true;
            } else if ((q & (1 | 2 | 4 | 8 | 16 | 32 | 64 | 128)) === (4 | 16)) {
              shouldDoAutoFix = true;
            }
            if (shouldDoAutoFix) {
              if (lastPanel === "chat") {
                ytBtnExpandChat();
                actioned = true;
              } else if (lastPanel === "playlist") {
                ytBtnOpenPlaylist();
                actioned = true;
              } else if (lastTab) {
                switchToTab(lastTab);
                actioned = true;
              } else if (resetForPanelDisappeared) {
                Promise.resolve(lockSet["fixInitialTabStateLock"]).then(eventMap["fixInitialTabStateFn"]).catch(console.warn);
                actioned = true;
              }
            }
            if (bFixForResizedTab) {
              bFixForResizedTabLater = false;
              Promise.resolve(0).then(eventMap["fixForTabDisplay"]).catch(console.warn);
            }
            if ((p & 16) === 16 ^ (q & 16) === 16) {
              Promise.resolve(lockSet["infoFixLock"]).then(infoFix).catch(console.warn);
              Promise.resolve(lockSet["removeKeepCommentsScrollerLock"]).then(removeKeepCommentsScroller).catch(console.warn);
              Promise.resolve(lockSet["layoutFixLock"]).then(layoutFix).catch(console.warn);
            }
          }
        },
        "updateOnVideoIdChanged": (lockId) => {
          if (lockId !== lockGet["updateOnVideoIdChangedLock"])
            return;
          const videoId = tmpLastVideoId;
          if (!videoId)
            return;
          const bodyRenderer = elements.infoExpanderRendererBack;
          const bodyRendererNew = elements.infoExpanderRendererFront;
          if (bodyRendererNew && bodyRenderer) {
            insp(bodyRendererNew).data = insp(bodyRenderer).data;
          }
          Promise.resolve(lockSet["infoFixLock"]).then(infoFix).catch(console.warn);
        },
        "fixInitialTabStateFn": async (lockId) => {
          if (lockGet["fixInitialTabStateLock"] !== lockId)
            return;
          const delayTime = fixInitialTabStateK > 0 ? 200 : 1;
          await delayPn(delayTime);
          if (lockGet["fixInitialTabStateLock"] !== lockId)
            return;
          const kTab = document.querySelector("[tyt-tab]");
          const qTab = !kTab || kTab.getAttribute("tyt-tab") === "" ? checkElementExist("ytd-watch-flexy[is-two-columns_]", "[hidden]") : null;
          if (checkElementExist("ytd-playlist-panel-renderer#playlist", "[hidden], [collapsed]")) {
            DEBUG_5085 && void 0;
            switchToTab(null);
          } else if (checkElementExist("ytd-live-chat-frame#chat", "[hidden], [collapsed]")) {
            DEBUG_5085 && void 0;
            switchToTab(null);
            if (checkElementExist("ytd-watch-flexy[theater]", "[hidden]")) {
              ytBtnCollapseChat();
            }
          } else if (qTab) {
            const hasTheater = qTab.hasAttribute("theater");
            if (!hasTheater) {
              DEBUG_5085 && void 0;
              const btn0 = document.querySelector(".tab-btn-visible");
              if (btn0) {
                switchToTab(btn0);
              } else {
                switchToTab(null);
              }
            } else {
              DEBUG_5085 && void 0;
              switchToTab(null);
            }
          } else {
            DEBUG_5085 && void 0;
          }
          fixInitialTabStateK++;
        },
        "tabs-btn-click": (evt) => {
          const target = evt.target;
          if (target instanceof HTMLElement_ && target.classList.contains("tab-btn") && target.hasAttribute000("tyt-tab-content")) {
            evt.preventDefault();
            evt.stopPropagation();
            evt.stopImmediatePropagation();
            const activeLink = target;
            switchToTab(activeLink);
          }
        }
      };
      Promise.all([videosElementProvidedPromise, navigateFinishedPromise]).then(() => deferAfterFirstPaint(eventMap["onceInsertRightTabs"])).catch(console.warn);
      Promise.all([navigateFinishedPromise, infoExpanderElementProvidedPromise]).then(() => deferAfterFirstPaint(eventMap["onceInfoExpanderElementProvidedPromised"])).catch(console.warn);
      const isCustomElementsProvided = typeof customElements !== "undefined" && typeof (customElements || 0).whenDefined === "function";
      const promiseForCustomYtElementsReady = isCustomElementsProvided ? Promise.resolve(0) : new Promise((callback) => {
        const EVENT_KEY_ON_REGISTRY_READY = "ytI-ce-registry-created";
        if (typeof customElements === "undefined") {
          if (!("__CE_registry" in document)) {
            Object.defineProperty(document, "__CE_registry", {
              get() {
              },
              set(nv) {
                if (typeof nv == "object") {
                  delete this.__CE_registry;
                  this.__CE_registry = nv;
                  this.dispatchEvent(new CustomEvent(EVENT_KEY_ON_REGISTRY_READY));
                }
                return true;
              },
              enumerable: false,
              configurable: true
            });
          }
          let eventHandler = (evt) => {
            document.removeEventListener(EVENT_KEY_ON_REGISTRY_READY, eventHandler, false);
            const f = callback;
            callback = null;
            eventHandler = null;
            f();
          };
          document.addEventListener(EVENT_KEY_ON_REGISTRY_READY, eventHandler, false);
        } else {
          callback();
        }
      });
      const _retrieveCE = async (nodeName) => {
        try {
          isCustomElementsProvided || await promiseForCustomYtElementsReady;
          await customElements.whenDefined(nodeName);
        } catch (e) {
        }
      };
      const retrieveCE = async (nodeName) => {
        try {
          isCustomElementsProvided || await promiseForCustomYtElementsReady;
          await customElements.whenDefined(nodeName);
          const dummy = document.querySelector(nodeName) || document.createElement(nodeName);
          const cProto = insp(dummy).constructor.prototype;
          return cProto;
        } catch (e) {
        }
      };
      const moOverallRes = {
        _yt_playerProvided: () => (window || 0)._yt_player || 0 || 0
      };
      let promiseWaitNext = null;
      let moOverallStarted = false;
      const moOverall = new MutationObserver(() => {
        if (promiseWaitNext) {
          promiseWaitNext.resolve();
          promiseWaitNext = null;
        }
        if (typeof moOverallRes._yt_playerProvided === "function") {
          const r = moOverallRes._yt_playerProvided();
          if (r) {
            moOverallRes._yt_playerProvided = r;
            eventMap._yt_playerProvided();
          }
        }
      });
      const startMoOverall = () => {
        if (moOverallStarted)
          return;
        moOverallStarted = true;
        moOverall.observe(document, { subtree: true, childList: true });
        if (typeof moOverallRes._yt_playerProvided === "function") {
          const r = moOverallRes._yt_playerProvided();
          if (r) {
            moOverallRes._yt_playerProvided = r;
            eventMap._yt_playerProvided();
          }
        }
      };
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startMoOverall, { once: true });
      } else {
        startMoOverall();
      }
      const moEgmPanelReady = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          const target = mutation.target;
          if (!target.hasAttribute000("tyt-egm-panel-jclmd"))
            continue;
          if (target.hasAttribute000("target-id") && target.hasAttribute000("visibility")) {
            target.removeAttribute000("tyt-egm-panel-jclmd");
            moEgmPanelReadyClearFn();
            Promise.resolve(target).then(eventMap["ytd-engagement-panel-section-list-renderer::bindTarget"]).catch(console.warn);
          }
        }
      });
      const moEgmPanelReadyClearFn = () => {
        if (document.querySelector("[tyt-egm-panel-jclmd]") === null) {
          moEgmPanelReady.takeRecords();
          moEgmPanelReady.disconnect();
        }
      };
      document.addEventListener("yt-navigate-finish", eventMap["yt-navigate-finish"], false);
      document.addEventListener("animationstart", (evt) => {
        const f = eventMap[evt.animationName];
        if (typeof f === "function")
          f(evt.target);
      }, capturePassive);
      mLoaded.flag |= 1;
      document.documentElement.setAttribute111("tabview-loaded", mLoaded.makeString());
      promiseForCustomYtElementsReady.then(eventMap["ceHack"]).catch(console.warn);
      executionFinished = 1;
    } catch (e) {
    }
  };

  var css_248z = ".html5-play-progress,.ytp-play-progress{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAMCAIAAAAs6UAAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUNCQzIyREQ0QjdEMTFFMzlEMDM4Qzc3MEY0NzdGMDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUNCQzIyREU0QjdEMTFFMzlEMDM4Qzc3MEY0NzdGMDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQ0JDMjJEQjRCN0QxMUUzOUQwMzhDNzcwRjQ3N0YwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQ0JDMjJEQzRCN0QxMUUzOUQwMzhDNzcwRjQ3N0YwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PovDFgYAAAAmSURBVHjaYvjPwMAAxjMZmBhA9H8INv4P4TPM/A+m04zBNECAAQBCWQv9SUQpVgAAAABJRU5ErkJggg==\") repeat-x!important;background:linear-gradient(180deg,red 0,red 16.5%,#f90 0,#f90 33%,#ff0 0,#ff0 50%,#3f0 0,#3f0 66%,#09f 0,#09f 83.5%,#63f 0,#63f)!important;background:-webkit-linear-gradient(top,red,red 16.5%,#f90 0,#f90 33%,#ff0 0,#ff0 50%,#3f0 0,#3f0 66%,#09f 0,#09f 83.5%,#63f 0,#63f)!important;background:-moz-linear-gradient(top,red 0,red 16.5%,#f90 16.5%,#f90 33%,#ff0 33%,#ff0 50%,#3f0 50%,#3f0 66%,#09f 66%,#09f 83.5%,#63f 83.5%,#63f 100%)!important}.html5-load-progress,.ytp-load-progress{background:url(\"data:image/gif;base64,R0lGODlhMAAMAIAAAAxBd////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgAAACwAAAAAMAAMAAACJYSPqcvtD6MKstpLr24Z9A2GYvJ544mhXQmxoesElIyCcB3dRgEAIfkEBAoAAAAsAQACAC0ACgAAAiGEj6nLHG0enNQdWbPefOHYhSLydVhJoSYXPO04qrAmJwUAIfkEBAoAAAAsBQABACkACwAAAiGEj6nLwQ8jcC5ViW3evHt1GaE0flxpphn6BNTEqvI8dQUAIfkEBAoAAAAsAQABACoACwAAAiGEj6nLwQ+jcU5VidPNvPtvad0GfmSJeicUUECbxnK0RgUAIfkEBAoAAAAsAAAAACcADAAAAiCEj6mbwQ+ji5QGd6t+c/v2hZzYiVpXmuoKIikLm6hXAAAh+QQECgAAACwAAAAALQAMAAACI4SPqQvBD6NysloTXL480g4uX0iW1Wg21oem7ismLUy/LFwAACH5BAQKAAAALAkAAAAkAAwAAAIghI8Joe0Po0yBWTaz3g/z7UXhMX7kYmplmo0rC8cyUgAAIfkEBAoAAAAsBQAAACUACgAAAh2Ejwmh7Q+jbIFZNrPeEXPudU74IVa5kSiYqOtRAAAh+QQECgAAACwEAAAAIgAKAAACHISPELfpD6OcqTGKs4bWRp+B36YFi0mGaVmtWQEAIfkEBAoAAAAsAAAAACMACgAAAh2EjxC36Q+jnK8xirOW1kavgd+2BYtJhmnpiGtUAAAh+QQECgAAACwAAAAALgALAAACIYSPqcvtD+MKicqLn82c7e6BIhZQ5jem6oVKbfdqQLzKBQAh+QQECgAAACwCAAIALAAJAAACHQx+hsvtD2OStDplKc68r2CEm0eW5uSN6aqe1lgAADs=\")!important}.html5-scrubber-button,.ytp-scrubber-button{background:url(\"data:image/gif;base64,R0lGODlhIgAVAKIHAL3/9/+Zmf8zmf/MmZmZmf+Z/wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkJBNjY5RTU1NEJFMzExOUM4QUM2MDAwNDQzRERBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREIzOEIzMzRCN0IxMUUzODhEQjgwOTYzMTgyNTE0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREIzOEIzMjRCN0IxMUUzODhEQjgwOTYzMTgyNTE0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM1QkE2NjlFNTU0QkUzMTE5QzhBQzYwMDA0NDNEREFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQkE2NjlFNTU0QkUzMTE5QzhBQzYwMDA0NDNEREFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECQcABwAsAAAAACIAFQAAA6J4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93bqCA7f7TFaYoIFAMMwczB5EkTzJllEUttmIGoG5bfPBjDawD7CsJC67uWcv2CRov929C/q2ZpcBbYBmLGk6W1BRY4MUDnMvJEsBAXdlknk2fCeRk2iJliAijpBlEmigjR0plKSgpKWvEUheF4tUZqZID1RHjEe8PsDBBwkAIfkECQcABwAsAAAAACIAFQAAA6B4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93TqS40XiKSYgTLBgIBAMqE/zmQSaZEzns+jQ9pC/5dQJ0VIv5KMVWxqb36opxHrNvu9ptPfGbmsBbgSAeRdydCdjXWRPchQPh1hNAQF4TpM9NnwukpRyi5chGjqJEoSOIh0plaYsZBKvsCuNjY5ptElgDyFIuj6+vwcJACH5BAkHAAcALAAAAAAiABUAAAOfeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GKifWaddvNQAtszXYCxgR/Zy5jYTFeXmSDiIZGdQEBd06QSBQ5e4cEkE9nnZQaG2J4F4MSLx8rkqUSZBeurhlTUqsLsi60DpZxSWBJugcJACH5BAkHAAcALAAAAAAiABUAAAOgeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GuifWaddvNwMkZtmY7AWMEgGcKY2ExXl5khFMVc0Z1AQF3TpJShDl8iASST2efloV5JTyJFpgOch8dgW9KZxexshGNLqgLtbW0SXFwvaJfCQAh+QQJBwAHACwAAAAAIgAVAAADoXi63P7wmUmrnVGOzbvfRsYYXGGe6MmF4kEOaSGYMwq2LizHfDGwIlLPNKGZfi6gZmggEAy2iVPZEKZqzakq+1xUFFYe90lxTsHmim6HGpvf3eR7skYJ3PC5tyystc0AboFnVXQ9XFJTZIQOYUYFTQEBeWaSVF4bbCeRk1meBJYSL3WbaReMIxQfHXh6jaYXsbEQni6oaF21ERR7l0ksvA0JACH5BAkHAAcALAAAAAAiABUAAAOeeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMfFlA4hTITEMxkIBMOuADwmhzqeM6mashTCXKw2TVKQyKuTRSx2wegnNkyJ1ozpOFiMLqcEU8BZHx6NYW8nVlZefQ1tZgQBAXJIi1eHUTRwi0lhl48QL0sogxaGDhMlUo2gh14fHhcVmnOrrxNqrU9joX21Q0IUElm7DQkAIfkECQcABwAsAAAAACIAFQAAA6J4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93bqCA7f7TFaYoIFAMMwczB5EkTzJllEUttmIGoG5bfPBjDawD7CsJC67uWcv2CRov929C/q2ZpcBbYBmLGk6W1BRY4MUDnMvJEsBAXdlknk2fCeRk2iJliAijpBlEmigjR0plKSgpKWvEUheF4tUZqZID1RHjEe8PsDBBwkAIfkECQcABwAsAAAAACIAFQAAA6B4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93TqS40XiKSYgTLBgIBAMqE/zmQSaZEzns+jQ9pC/5dQJ0VIv5KMVWxqb36opxHrNvu9ptPfGbmsBbgSAeRdydCdjXWRPchQPh1hNAQF4TpM9NnwukpRyi5chGjqJEoSOIh0plaYsZBKvsCuNjY5ptElgDyFIuj6+vwcJACH5BAkHAAcALAAAAAAiABUAAAOfeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GKifWaddvNQAtszXYCxgR/Zy5jYTFeXmSDiIZGdQEBd06QSBQ5e4cEkE9nnZQaG2J4F4MSLx8rkqUSZBeurhlTUqsLsi60DpZxSWBJugcJACH5BAkHAAcALAAAAAAiABUAAAOgeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GuifWaddvNwMkZtmY7AWMEgGcKY2ExXl5khFMVc0Z1AQF3TpJShDl8iASST2efloV5JTyJFpgOch8dgW9KZxexshGNLqgLtbW0SXFwvaJfCQAh+QQJBwAHACwAAAAAIgAVAAADoXi63P7wmUmrnVGOzbvfRsYYXGGe6MmF4kEOaSGYMwq2LizHfDGwIlLPNKGZfi6gZmggEAy2iVPZEKZqzakq+1xUFFYe90lxTsHmim6HGpvf3eR7skYJ3PC5tyystc0AboFnVXQ9XFJTZIQOYUYFTQEBeWaSVF4bbCeRk1meBJYSL3WbaReMIxQfHXh6jaYXsbEQni6oaF21ERR7l0ksvA0JACH5BAkHAAcALAAAAAAiABUAAAOeeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMfFlA4hTITEMxkIBMOuADwmhzqeM6mashTCXKw2TVKQyKuTRSx2wegnNkyJ1ozpOFiMLqcEU8BZHx6NYW8nVlZefQ1tZgQBAXJIi1eHUTRwi0lhl48QL0sogxaGDhMlUo2gh14fHhcVmnOrrxNqrU9joX21Q0IUElm7DQkAOw==\")!important;border:none!important;height:21px!important;margin-left:-18px!important;margin-top:0!important;transform:scale(.8);-webkit-transform:scale(.8);-moz-transform:scale(.8);-ms-transform:scale(.8);width:34px!important}.ytp-progress-bar-container:hover .ytp-load-progress,.ytp-progress-bar-container:hover .ytp-scrubber-button{image-rendering:pixelated}.html5-progress-bar-container,.ytp-progress-bar-container{height:12px!important}.html5-progress-bar,.ytp-progress-bar{margin-top:12px!important}.html5-progress-list,.video-ads .html5-progress-list.html5-ad-progress-list,.video-ads .ytp-progress-list.ytp-ad-progress-list,.ytp-progress-list{height:12px!important}.ytp-volume-slider-track{background:#0c4177!important}";

  const ThemeProgressbar = {
    start: function() {
      if (!/youtube\.com/.test(window.location.host)) {
        return;
      }
      GM_addStyle(css_248z);
    }
  };

  const commonUtil = {
    onPageLoad: function(callback) {
      let called = false;
      const onceCallback = () => {
        if (called)
          return;
        called = true;
        callback();
      };
      if (document.readyState === "complete") {
        onceCallback();
      } else {
        window.addEventListener("DOMContentLoaded", onceCallback, { once: true });
        window.addEventListener("load", onceCallback, { once: true });
      }
    },
    addStyle: function(style) {
      GM_addStyle(style);
    },
    waitForElementByInterval: function(selector, target = document.body, allowEmpty = true, delay = 10, maxDelay = 10 * 1e3) {
      return new Promise((resolve, reject) => {
        let totalDelay = 0;
        let element = target.querySelector(selector);
        let result = allowEmpty ? !!element : !!element && !!element.innerHTML;
        if (result) {
          resolve(element);
        }
        const elementInterval = setInterval(() => {
          if (totalDelay >= maxDelay) {
            clearInterval(elementInterval);
            resolve(null);
          }
          element = target.querySelector(selector);
          result = allowEmpty ? !!element : !!element && !!element.innerHTML;
          if (result) {
            clearInterval(elementInterval);
            resolve(element);
          } else {
            totalDelay += delay;
          }
        }, delay);
      });
    }
  };

  const SpeedControl = {
    currentSpeed: 1,
    activeAnimationId: null,
    run: function() {
      if (!/youtube\.com/.test(window.location.host)) {
        return new Promise((resolve) => {
          resolve();
        });
      }
      return new Promise((resolve) => {
        const speedControl = StorageUtil.getValue(StorageUtil.keys.youtube.functionState.speedControl, true);
        if (!speedControl) {
          resolve();
          return;
        }
        const storageSpeed = StorageUtil.getValue(StorageUtil.keys.youtube.videoPlaySpeed, 1);
        this.currentSpeed = parseFloat(storageSpeed);
        this.insertStyle();
        commonUtil.onPageLoad(async () => {
          await this.genrate();
          this.setVideoRate(storageSpeed);
          this.videoObserver();
          resolve();
        });
      });
    },
    insertStyle: function() {
      const speedBtnStyle = `
			.SpeedControl_Extension_Btn_X{
				width: 4em !important; 
				float: left; 
				text-align: center !important;
				display: flex !important;
				justify-content: center !important;
				align-items: center !important;
				border-radius: 0.5em !important;
				font-size:14px !important;
				font-weight:bold!important;
			}
			.SpeedControl_Extension_Btn_X:hover{
				color:red;
				font-weight: bold;
			}
		`;
      const speedShowStyle = `
			#youtube-extension-text-box {
				position: absolute!important;
				margin: auto!important;
				top: 0px!important;
				right: 0px!important;
				bottom: 0px!important;
				left: 0px!important;
				border-radius: 20px!important;
				font-size: 30px!important;
				color: #f3f3f3!important;
				z-index: 99999999999999999!important;
				opacity: 0.8!important;
				width: 80px!important;
				height: 80px!important;
				line-height: 80px!important;
				text-align: center!important;
				padding: 0px!important;
			}
		`;
      const speedOptionsStyle = `
			.SpeedControl_Extension_Speed-Options {
				position: absolute!important;
				background: rgba(0, 0, 0, 0.4) !important;
				color: white!important;
				border-radius: 8px!important;
				box-sizing: border-box!important;
				z-index:999999999999!important;
				display:none;
				padding:10px!important;
				font-weight:bold!important;
			}
			.SpeedControl_Extension_Speed-Options >.SpeedControl_Extension_Speed-Option-Item {
				cursor: pointer!important;
				height: 25px!important;
				line-height: 25px!important;
				font-size:12px!important;
				text-align: center!important;
			}
			.SpeedControl_Extension_Speed-Options >.SpeedControl_Extension_Speed-Option-Item-Active,
			.SpeedControl_Extension_Speed-Options >.SpeedControl_Extension_Speed-Option-Item:hover {
				color: red!important;
			}
		`;
      commonUtil.addStyle(speedBtnStyle + speedShowStyle + speedOptionsStyle);
    },
    genrate: async function() {
      const speedControlBtn = document.createElement("div");
      speedControlBtn.className = "ytp-button SpeedControl_Extension_Btn_X";
      const speedText = document.createElement("span");
      speedText.textContent = "" + this.currentSpeed + "×";
      speedControlBtn.appendChild(speedText);
      const player = await commonUtil.waitForElementByInterval("#player-container-outer .html5-video-player");
      if (player) {
        const rightControls = player.querySelector(".ytp-right-controls");
        const ScreenShot_Codehemu_Btn = document.querySelector(".SpeedControl_Extension_Btn_X");
        if (rightControls && !ScreenShot_Codehemu_Btn) {
          rightControls.prepend(speedControlBtn);
          this.genrateOptions(speedControlBtn, player);
        }
      }
    },
    genrateOptions: function(button, player) {
      const speedOptions = document.createElement("div");
      speedOptions.id = "SpeedControl_Extension_Speed-Options";
      speedOptions.className = "SpeedControl_Extension_Speed-Options";
      const speeds = ["0.5", "0.75", "1.0", "1.25", "1.5", "2.0", "3.0"];
      speeds.forEach((speed) => {
        const option = document.createElement("div");
        option.className = "SpeedControl_Extension_Speed-Option-Item";
        option.textContent = `${speed}x`;
        option.dataset.speed = speed;
        if (parseFloat(speed) === this.currentSpeed) {
          option.classList.add("SpeedControl_Extension_Speed-Option-Item-Active");
        }
        speedOptions.appendChild(option);
        option.addEventListener("click", (event) => {
          const speedValue = parseFloat(speed);
          this.speedDisplayText("" + speedValue + "×");
          this.setVideoRate(speedValue);
          this.currentSpeed = speedValue;
          this.updateVideoPlaySpeedStorage(speedValue);
          button.querySelector("span").textContent = "" + speedValue + "×";
          speedOptions.querySelectorAll(".SpeedControl_Extension_Speed-Option-Item").forEach((element) => {
            element.classList.remove("SpeedControl_Extension_Speed-Option-Item-Active");
          });
          event.target.classList.add("SpeedControl_Extension_Speed-Option-Item-Active");
        });
      });
      player.appendChild(speedOptions);
      let isHovering = false;
      button.addEventListener("mouseenter", () => {
        speedOptions.style.display = "block";
        var containerRect = player.getBoundingClientRect();
        var buttonRect = button.getBoundingClientRect();
        var speedOptionsRect = speedOptions.getBoundingClientRect();
        var left = buttonRect.left - containerRect.left - speedOptionsRect.width / 2 + buttonRect.width / 2;
        var top = buttonRect.top - containerRect.top - speedOptions.clientHeight;
        speedOptions.style.left = `${left}px`;
        speedOptions.style.top = `${top}px`;
      });
      button.addEventListener("mouseleave", () => {
        isHovering = false;
        setTimeout(() => {
          if (!isHovering) {
            speedOptions.style.display = "none";
          }
        }, 100);
      });
      speedOptions.addEventListener("mouseenter", () => {
        isHovering = true;
      });
      speedOptions.addEventListener("mouseleave", () => {
        isHovering = false;
        speedOptions.style.display = "none";
      });
    },
    updateVideoPlaySpeedStorage: function(speedValue) {
      StorageUtil.setValue(StorageUtil.keys.youtube.videoPlaySpeed, speedValue);
    },
    speedDisplayText: function(speedText) {
      let elementId = "youtube-extension-text-box";
      let element = document.getElementById(elementId);
      if (!element) {
        let mediaElement = document.getElementById("movie_player");
        mediaElement.insertAdjacentHTML("afterbegin", `<div id="${elementId}">${speedText}</div>`);
        element = document.getElementById(elementId);
      } else {
        element.textContent = speedText;
      }
      element.style.display = "block";
      element.style.opacity = 0.8;
      element.style.filter = `alpha(opacity=${0.8 * 100})`;
      this.startFadeoutAnimation(element);
    },
    startFadeoutAnimation: function(element, startOpacity = 0.9, duration = 1500) {
      let opacity = startOpacity;
      const startTime = performance.now();
      if (this.activeAnimationId) {
        cancelAnimationFrame(this.activeAnimationId);
      }
      const fadeStep = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        opacity = startOpacity * (1 - progress);
        element.style.opacity = opacity;
        element.style.filter = `alpha(opacity=${opacity * 100})`;
        if (progress < 1) {
          this.activeAnimationId = requestAnimationFrame(fadeStep);
        } else {
          element.style.display = "none";
          this.activeAnimationId = null;
        }
      };
      this.activeAnimationId = requestAnimationFrame(fadeStep);
    },
    setVideoRate: function(speed) {
      const videoElement = document.querySelector("video");
      if (!videoElement)
        return;
      videoElement.playbackRate = speed;
    },
    videoObserver: function() {
      const applyVideoRate = (videoElement) => {
        if (!videoElement)
          return;
        videoElement.playbackRate = this.currentSpeed;
      };
      const observeVideo = () => {
        const videoElement = document.querySelector("video");
        if (videoElement) {
          applyVideoRate(videoElement);
        }
      };
      observeVideo();
      if (this.videoRateObserver) {
        this.videoRateObserver.disconnect();
      }
      this.videoRateObserver = new MutationObserver(observeVideo);
      this.videoRateObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  };

  const MarkOrRemoveAd = {
    generateRemoveAdElementId: "removeADHTMLElement_" + Math.ceil(Math.random() * 1e8),
    markADHTMLElement: function() {
      if (document.querySelector(this.generateRemoveAdElementId)) {
        return;
      }
      let cssMarkSelectorArr = [
        `#masthead-ad`,
        `ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)`,
        `.video-ads.ytp-ad-module`,
        `tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)`,
        `ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]`,
        `#related #player-ads`,
        `#related ytd-ad-slot-renderer`,
        `ytd-ad-slot-renderer`,
        `yt-mealbar-promo-renderer`,
        `ytd-popup-container:has(a[href="/premium"])`,
        `ad-slot-renderer`,
        `ytm-companion-ad-renderer`
      ];
      cssMarkSelectorArr.forEach((selector, index) => {
        cssMarkSelectorArr[index] = `${selector} *{text-decoration:line-through!important;text-decoration-thickness:2px!important;}`;
      });
      const cssText = cssMarkSelectorArr.join(" ");
      const style = document.createElement(`style`);
      style.id = this.generateRemoveAdElementId;
      (document.head || document.body).appendChild(style);
      style.appendChild(document.createTextNode(cssText));
    },
    run: function() {
      if (!/youtube\.com/.test(window.location.host)) {
        return;
      }
      commonUtil.onPageLoad(() => {
        this.markADHTMLElement();
      });
    }
  };

  const Theme = {
    setTheme: function(theme = "light", isReload = true) {
      if (theme === "light") {
        this.setLight(isReload);
      } else if (theme === "dark") {
        this.setDark(isReload);
      } else {
        this.setLight(isReload);
      }
    },
    setDark: function(isReload) {
      this.isDarkTheme(true, isReload);
    },
    setLight: function(isReload) {
      this.isDarkTheme(false, isReload);
    },
    reloadYouTube: function() {
      location.reload();
    },
    isDarkTheme: function(enabled, isReload) {
      const cookies = document.cookie.split("; ");
      let prefCookie = cookies.find((cookie) => cookie.startsWith("PREF="));
      let prefValue = prefCookie ? prefCookie.split("=")[1] : "f6=400";
      prefValue = prefValue.replace(/&f6=\d+/, "").replace(/f6=\d+/, "");
      const prefix = prefValue ? "&" : "";
      if (enabled) {
        prefValue += prefix + "f6=400";
      } else {
        prefValue += prefix + "f6=80000";
      }
      document.cookie = `PREF=${prefValue}; path=/; domain=.youtube.com; secure`;
      if (isReload) {
        this.reloadYouTube();
      }
    }
  };

  const Screenshot = {
    start: function() {
      var SF_Codhemeu = "png";
      var extension = "png";
      var appendixTitle = "screenshot." + extension;
      var title;
      var headerEls = document.querySelectorAll(
        "h1.title.ytd-video-primary-info-renderer"
      );
      function SetTitle() {
        if (headerEls.length > 0) {
          title = headerEls[0].innerText.trim();
          return true;
        } else {
          return false;
        }
      }
      if (SetTitle() == false) {
        headerEls = document.querySelectorAll("h1.watch-title-container");
        if (SetTitle() == false)
          title = "";
      }
      var player = document.getElementsByClassName("video-stream")[0];
      var time = player.currentTime;
      title += " ";
      let minutes = Math.floor(time / 60);
      time = Math.floor(time - minutes * 60);
      if (minutes > 60) {
        let hours = Math.floor(minutes / 60);
        minutes -= hours * 60;
        title += hours + "-";
      }
      title += minutes + "-" + time;
      title += " " + appendixTitle;
      var canvas = document.createElement("canvas");
      canvas.width = player.videoWidth;
      canvas.height = player.videoHeight;
      canvas.getContext("2d").drawImage(player, 0, 0, canvas.width, canvas.height);
      var downloadLink = document.createElement("a");
      downloadLink.download = title;
      function DownloadBlob(blob) {
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.click();
      }
      {
        canvas.toBlob(async function(blob) {
          DownloadBlob(blob);
        }, "image/" + SF_Codhemeu);
      }
    }
  };

  const Dialog = function() {
    class Dialog2 {
      constructor() {
        this.mask = document.createElement("div");
        this.dialogStyle = document.createElement("style");
        this.mask.classList.add("dialog-gcc-mask");
        this.setStyle(this.mask, {
          "width": "100%",
          "height": "100%",
          "backgroundColor": "rgba(0, 0, 0, .6)",
          "position": "fixed",
          "left": "0px",
          "top": "0px",
          "bottom": "0px",
          "right": "0px",
          "z-index": "9999999999999"
        });
        this.content = document.createElement("div");
        this.content.classList.add("dialog-gcc-container");
        this.setStyle(this.content, {
          "max-width": "350px",
          "width": "90%",
          "backgroundColor": "#fff",
          "boxShadow": "0 0 2px #999",
          "position": "absolute",
          "left": "50%",
          "top": "50%",
          "transform": "translate(-50%,-50%)",
          "borderRadius": "5px"
        });
        this.mask.appendChild(this.content);
      }
      middleBox(param) {
        this.content.innerHTML = "";
        if (param.hasOwnProperty("direction")) {
          this.content.setAttribute("data-extension-direction", param.direction);
        }
        let title = "";
        if ({}.toString.call(param) === "[object String]") {
          title = param;
        } else if ({}.toString.call(param) === "[object Object]") {
          title = param.title;
        }
        document.body.appendChild(this.mask);
        this.title = document.createElement("div");
        this.title.classList.add("dialog-gcc-title");
        this.setStyle(this.title, {
          "width": "100%",
          "height": "40px",
          "lineHeight": "40px",
          "boxSizing": "border-box",
          "background-color": "#dedede",
          "color": "#000",
          "text-align": "center",
          "font-weight": "700",
          "font-size": "17px",
          "border-radius": "4px 4px 0px 0px"
        });
        const span = document.createElement("span");
        span.innerText = title;
        span.setAttribute("langue-extension-text", "setting_modal_title");
        this.title.appendChild(span);
        this.closeBtn = document.createElement("span");
        this.closeBtn.innerText = "×";
        this.setStyle(this.closeBtn, {
          "textDecoration": "none",
          "color": "#000",
          "position": "absolute",
          "inset-inline-end": "10px",
          "top": "0px",
          "fontSize": "25px",
          "display": "inline-block",
          "cursor": "pointer"
        });
        this.title.appendChild(this.closeBtn);
        this.content.appendChild(this.title);
        this.closeBtn.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.close();
          if (param.onClose) {
            param.onClose();
          }
        };
      }
      showMake(param) {
        if (param.hasOwnProperty("styleSheet")) {
          this.dialogStyle.textContent = param.styleSheet;
        }
        document.querySelector("head").appendChild(this.dialogStyle);
        this.middleBox(param);
        this.dialogContent = document.createElement("div");
        this.dialogContent.classList.add("dialog-gcc-content");
        this.setStyle(this.dialogContent, {
          "padding": "15px",
          "max-height": "400px",
          "overflow": "auto"
        });
        this.dialogContent.innerHTML = param.content;
        this.content.appendChild(this.dialogContent);
        param.onContentReady(this);
      }
      updateTitle(title) {
        if (this.title) {
          this.title.innerText = title;
        }
      }
      close() {
        document.body.removeChild(this.mask);
        document.querySelector("head").removeChild(this.dialogStyle);
      }
      setStyle(ele, styleObj) {
        for (let attr in styleObj) {
          ele.style[attr] = styleObj[attr];
        }
      }
    }
    let dialog = null;
    return function() {
      if (!dialog) {
        dialog = new Dialog2();
      }
      return dialog;
    }();
  }();

  const ComstomConfirm = {
    show: function(options) {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "rgba(0, 0, 0, 0.5)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = 9999;
      const box = document.createElement("div");
      box.style.background = "white";
      box.style.padding = "20px 30px";
      box.style.borderRadius = "8px";
      box.style.textAlign = "center";
      box.style.width = "90%";
      box.style.maxWidth = "300px";
      box.style.fontSize = "16px";
      box.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
      const text = document.createElement("div");
      text.textContent = options.message;
      text.style.marginBottom = "15px";
      text.style.textAlign = "left";
      const buttonBox = document.createElement("div");
      const confirmBtn = document.createElement("button");
      confirmBtn.textContent = options.enter;
      confirmBtn.style.margin = "0 10px";
      confirmBtn.style.padding = "8px 16px";
      confirmBtn.style.border = "none";
      confirmBtn.style.borderRadius = "4px";
      confirmBtn.style.backgroundColor = "#000";
      confirmBtn.style.color = "white";
      confirmBtn.style.cursor = "pointer";
      confirmBtn.style.fontSize = "15px";
      confirmBtn.onclick = function() {
        document.body.removeChild(overlay);
        if (options.onEnter) {
          options.onEnter();
        }
      };
      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = options.cancel;
      cancelBtn.style.margin = "0 10px";
      cancelBtn.style.padding = "8px 16px";
      cancelBtn.style.border = "none";
      cancelBtn.style.borderRadius = "4px";
      cancelBtn.style.backgroundColor = "#ccc";
      cancelBtn.style.cursor = "pointer";
      cancelBtn.style.fontSize = "15px";
      cancelBtn.onclick = function() {
        if (options.onCancel) {
          options.onCancel();
        }
        document.body.removeChild(overlay);
      };
      buttonBox.appendChild(cancelBtn);
      buttonBox.appendChild(confirmBtn);
      box.appendChild(text);
      box.appendChild(buttonBox);
      overlay.appendChild(box);
      document.body.appendChild(overlay);
    }
  };

  const LangueUtil = {
    language: {
      "en": {
        direction: "ltr",
        content: {
          "function_setting_title": "Setting",
          "function_is_comment_table_open": "Enable video details page interface optimization.",
          "function_is_auto_mini_player_open": "Enable automatic mini player when leaving the watch page.",
          "function_is_theme_progress_bar_open": "Enable video playback progress bar beautification.",
          "function_is_speed_control_open": "Enable video fast forward (playback speed selectable).",
          "function_is_mark_or_remove_ad_open": "Enable page ad labeling.",
        }
      },
      "ja": {
        direction: "ltr",
        content: {
          "function_setting_title": "設定",
          "function_is_comment_table_open": "動画詳細ページのインターフェース最適化を有効にする。",
          "function_is_theme_progress_bar_open": "動画再生の進行状況バーの装飾を有効にする。",
          "function_is_speed_control_open": "動画の早送り（再生速度選択可能）を有効にする。",
          "function_is_mark_or_remove_ad_open": "ページ広告のラベリングを有効にする。",
        }
      },
      "ko": {
        direction: "ltr",
        content: {
          "function_setting_title": "설정",
          "function_is_comment_table_open": "동영상 상세 페이지 인터페이스 최적화 활성화.",
          "function_is_theme_progress_bar_open": "동영상 재생 진행 바 장식 활성화.",
          "function_is_speed_control_open": "동영상 빨리감기(재생 속도 선택 가능) 활성화.",
          "function_is_mark_or_remove_ad_open": "페이지 광고 라벨링 활성화.",
        }
      },
      "ru": {
        direction: "ltr",
        content: {
          "function_setting_title": "Настройки",
          "function_is_comment_table_open": "Включить оптимизацию интерфейса страницы деталей видео.",
          "function_is_theme_progress_bar_open": "Включить улучшение панели прогресса воспроизведения видео.",
          "function_is_speed_control_open": "Включить перемотку видео (выбор скорости воспроизведения).",
          "function_is_mark_or_remove_ad_open": "Включить маркировку рекламы на странице.",
        }
      },
      "id": {
        direction: "ltr",
        content: {
          "function_setting_title": "Pengaturan",
          "function_is_comment_table_open": "Aktifkan pengoptimalan antarmuka halaman detail video.",
          "function_is_theme_progress_bar_open": "Aktifkan pempercantik bilah progres pemutaran video.",
          "function_is_speed_control_open": "Aktifkan percepatan video (kecepatan pemutaran dapat dipilih).",
          "function_is_mark_or_remove_ad_open": "Aktifkan pelabelan iklan di halaman.",
        }
      },
      "fr": {
        direction: "ltr",
        content: {
          "function_setting_title": "Paramètres",
          "function_is_comment_table_open": "Activer l’optimisation de l’interface de la page de détails de la vidéo.",
          "function_is_theme_progress_bar_open": "Activer l’embellissement de la barre de progression de la vidéo.",
          "function_is_speed_control_open": "Activer l’avance rapide de la vidéo (vitesse de lecture sélectionnable).",
          "function_is_mark_or_remove_ad_open": "Activer l’étiquetage des publicités sur la page.",
        }
      },
      "pt": {
        direction: "ltr",
        content: {
          "function_setting_title": "Configurações",
          "function_is_comment_table_open": "Ativar otimização da interface da página de detalhes do vídeo.",
          "function_is_theme_progress_bar_open": "Ativar embelezamento da barra de progresso do vídeo.",
          "function_is_speed_control_open": "Ativar avanço rápido do vídeo (velocidade de reprodução selecionável).",
          "function_is_mark_or_remove_ad_open": "Ativar rotulagem de anúncios na página.",
        }
      },
      "tr": {
        direction: "ltr",
        content: {
          "function_setting_title": "Ayarlar",
          "function_is_comment_table_open": "Video detay sayfası arayüz optimizasyonunu etkinleştir.",
          "function_is_theme_progress_bar_open": "Video oynatma ilerleme çubuğu güzelleştirmesini etkinleştir.",
          "function_is_speed_control_open": "Video hızlı oynatmayı etkinleştir (oynatma hızı seçilebilir).",
          "function_is_mark_or_remove_ad_open": "Sayfadaki reklam etiketlemesini etkinleştir.",
        }
      },
      "zh-CN": {
        direction: "ltr",
        content: {
          "function_setting_title": "设置",
          "function_is_comment_table_open": "启用视频详情页面界面优化。",
          "function_is_auto_mini_player_open": "启用离开播放页面后自动小窗播放。",
          "function_is_theme_progress_bar_open": "启用视频播放进度条美化。",
          "function_is_speed_control_open": "启用视频快进（播放速度可选择）。",
          "function_is_mark_or_remove_ad_open": "启用页面广告标记。",
        }
      },
      "zh-TW": {
        direction: "ltr",
        content: {
          "function_setting_title": "設定",
          "function_is_comment_table_open": "啟用影片詳情頁面介面優化。",
          "function_is_auto_mini_player_open": "啟用離開播放頁面後自動小窗播放。",
          "function_is_theme_progress_bar_open": "啟用影片播放進度條美化。",
          "function_is_speed_control_open": "啟用影片快轉（播放速度可選擇）。",
          "function_is_mark_or_remove_ad_open": "啟用頁面廣告標記。",
        }
      }
    },
    getLang: function() {
      const lang = navigator.language || navigator.userLanguage;
      const supportedLanguages = {
        "en": "en",
        "es": "es",
        "fr": "fr",
        "pt": "pt",
        "ru": "ru",
        "ja": "ja",
        "de": "de",
        "ko": "ko",
        "it": "it",
        "id": "id",
        "tr": "tr",
        "pl": "pl",
        "uk": "uk",
        "nl": "nl",
        "vi": "vi",
        "th": "th",
        "ar": "ar",
        "fa": "fa",
        "hi": "hi",
        "ms": "ms",
        "zh-CN": "zh-CN",
        "zh-TW": "zh-TW"
      };
      const langCode = lang.split("-")[0];
      if (langCode === "zh") {
        return lang === "zh-CN" ? "zh-CN" : "zh-TW";
      }
      return supportedLanguages[langCode] || "en";
    },
    getLanguage: function() {
      const lang = this.getLang();
      return this.language[lang] ?? this.language.en;
    }
  };
  const ToolBox = {
    getFunctionState: function() {
      return StorageUtil.getValue(
        StorageUtil.keys.youtube.functionState,
        StorageUtil.getDefaultFunctionState()
      );
    },
    insertStyle: function() {
      const speedOptionsStyle = `
			.toolbox_extension_container {
			    position: absolute!important;
			    background: rgba(0, 0, 0, 0.4) !important;
			    color: white!important;
			    border-radius: 8px!important;
			    box-sizing: border-box!important;
				z-index:999999999999!important;
				display:none;
				padding:13px!important;
			}
			.toolbox_extension_container .toolbox_extension_tools {
			    display: grid!important;
			    grid-template-columns: repeat(4, 1fr)!important;
			    gap: 8px!important;
			}
			.toolbox_extension_container .toolbox_extension_tool_btn {
			    width: 25px!important;
			    height: 25px!important;
			    background:#F4F4F4!important;
			    border: none!important;
			    cursor: pointer!important;
				display: flex!important;
				justify-content: center!important;
				align-items: center!important;
				border-radius:5px!important;
			}
		`;
      commonUtil.addStyle(speedOptionsStyle);
    },
    genrateSettingSvg: function() {
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "0 0 1024 1024");
      svg.setAttribute("width", "22");
      svg.setAttribute("height", "22");
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", "M449.194667 82.346667a128 128 0 0 1 125.610666 0l284.16 160a128 128 0 0 1 65.194667 111.530666v316.245334a128 128 0 0 1-65.194667 111.530666l-284.16 160a128 128 0 0 1-125.610666 0l-284.16-160a128 128 0 0 1-65.194667-111.530666V353.877333A128 128 0 0 1 165.034667 242.346667z m83.754666 74.410666a42.666667 42.666667 0 0 0-41.898666 0L206.933333 316.714667a42.666667 42.666667 0 0 0-21.76 37.162666v316.245334a42.666667 42.666667 0 0 0 21.76 37.162666l284.16 160a42.666667 42.666667 0 0 0 41.898667 0l284.16-160a42.666667 42.666667 0 0 0 21.76-37.162666V353.877333a42.666667 42.666667 0 0 0-21.76-37.162666zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 85.333334a85.333333 85.333333 0 1 0 0 170.666666 85.333333 85.333333 0 0 0 0-170.666666z");
      path.setAttribute("fill", "#000000");
      svg.appendChild(path);
      return svg;
    },
    genrateToolSvg: function() {
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "0 0 1024 1024");
      svg.setAttribute("width", "22");
      svg.setAttribute("height", "22");
      svg.setAttribute("class", "icon");
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", "M364.999 128.853H158.28c-52.383 0-95 42.617-95 95v206.719c0 52.383 42.617 95 95 95h206.719c52.383 0 95-42.617 95-95V223.853c0-52.384-42.617-95-95-95zM364.999 562.39H158.28c-52.383 0-95 42.617-95 95v206.719c0 52.383 42.617 95 95 95h206.719c52.383 0 95-42.617 95-95V657.39c0-52.383-42.617-95-95-95zM943.066 230.037L796.895 83.865c-17.943-17.943-41.8-27.825-67.175-27.825-25.376 0-49.232 9.881-67.175 27.825L516.372 230.037c-37.041 37.041-37.041 97.31 0 134.35l146.172 146.172c17.943 17.943 41.8 27.825 67.176 27.825 25.375 0 49.231-9.882 67.175-27.825l146.172-146.172c17.943-17.943 27.825-41.8 27.825-67.175s-9.882-49.233-27.826-67.175z m-21.212 113.137L775.682 489.346c-12.277 12.277-28.601 19.038-45.962 19.038-17.362 0-33.686-6.761-45.963-19.038L537.585 343.174c-25.343-25.344-25.343-66.581 0-91.924l146.173-146.172c12.276-12.277 28.6-19.038 45.962-19.038 17.361 0 33.685 6.761 45.962 19.038L921.854 251.25c12.276 12.277 19.038 28.6 19.038 45.962s-6.762 33.685-19.038 45.962zM798.887 562.39H592.168c-52.383 0-95 42.617-95 95v206.719c0 52.383 42.617 95 95 95h206.719c52.383 0 95-42.617 95-95V657.39c0-52.383-42.617-95-95-95z");
      path.setAttribute("fill", "#ffffff");
      svg.appendChild(path);
      return svg;
    },
    genrateScreenshotSvg: function() {
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "0 0 1024 1024");
      svg.setAttribute("width", "20");
      svg.setAttribute("height", "20");
      svg.setAttribute("class", "icon");
      const path1 = document.createElementNS(svgNS, "path");
      path1.setAttribute("d", "M924.49999971 755.74999971h-93.74999942V287c0-52.49999971-41.24999971-93.75000029-93.75000029-93.75000029H268.25000029V99.50000029c0-22.5-15.00000029-37.50000029-37.50000029-37.50000029s-37.50000029 15.00000029-37.50000029 37.50000029v93.74999942H99.50000029c-22.5 0-37.50000029 15.00000029-37.50000029 37.50000029s15.00000029 37.50000029 37.50000029 37.50000029h93.74999942V737c0 52.49999971 41.24999971 93.75000029 93.75000029 93.75000029h468.74999971V924.49999971c0 22.5 15.00000029 37.50000029 37.50000029 37.50000029s37.50000029-15.00000029 37.50000029-37.50000029v-93.74999942H924.49999971c22.5 0 37.50000029-15.00000029 37.50000029-37.50000029s-15.00000029-37.50000029-37.50000029-37.50000029z m-187.49999971-487.49999942c11.25 0 18.74999971 7.49999971 18.74999971 18.74999971v299.99999971l-127.49999942-123.75c-15.00000029-15.00000029-37.50000029-15.00000029-52.50000058 0l-123.75 127.50000029L399.5 538.25000029c-15.00000029-15.00000029-33.75-15.00000029-48.75000029-3.75000029l-78.75 63.74999971V268.25000029H737z m-450 487.49999942c-11.25 0-18.74999971-7.49999971-18.74999971-18.74999971v-37.50000029l101.25-82.49999942 56.25 56.25c7.49999971 7.49999971 15.00000029 11.25 26.24999942 11.25s18.74999971-3.75000029 26.25000029-11.25l123.75-127.50000029 153.74999971 146.25v63.74999971H287z");
      path1.setAttribute("fill", "#000000");
      const path2 = document.createElementNS(svgNS, "path");
      path2.setAttribute("d", "M399.5 485.74999971c45 0 82.50000029-37.50000029 82.50000029-82.49999942s-37.50000029-82.50000029-82.50000029-82.50000029-82.50000029 33.75-82.50000029 78.75 37.50000029 86.24999971 82.50000029 86.24999971z m0-112.5c15.00000029 0 29.99999971 11.25 29.99999971 30.00000058s-15.00000029 26.25000029-29.99999971 26.24999942-29.99999971-15.00000029-29.99999971-29.99999971 15.00000029-26.25000029 29.99999971-26.25000029z");
      path2.setAttribute("fill", "#000000");
      svg.appendChild(path1);
      svg.appendChild(path2);
      return svg;
    },
    genrateSwitchThemeSvg: function() {
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("t", "1743577080138");
      svg.setAttribute("class", "icon");
      svg.setAttribute("viewBox", "0 0 1024 1024");
      svg.setAttribute("version", "1.1");
      svg.setAttribute("xmlns", svgNS);
      svg.setAttribute("p-id", "1950");
      svg.setAttribute("width", "20");
      svg.setAttribute("height", "20");
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", "M873.91601563 358.72753906A393.42480469 393.42480469 0 0 0 512 118.25c-217.546875 0.47460938-393.75 176.57226563-393.75 393.75s176.203125 393.27539063 393.75 393.75a393.95214844 393.95214844 0 0 0 361.91601563-547.02246094zM749.77050781 750.65820313A335.27636719 335.27636719 0 0 1 512 849.5V174.5a337.5 337.5 0 0 1 237.77050781 576.15820313z");
      path.setAttribute("p-id", "1951");
      svg.appendChild(path);
      return svg;
    },
    genratePictureToPictureSvg: function() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "20");
      svg.setAttribute("height", "20");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      const paths = [
        { d: "M0 0h24v24H0z", fill: "none" },
        { d: "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" },
        { d: "M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" }
      ];
      paths.forEach((attrs) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        if (!attrs.hasOwnProperty("fill")) {
          path.setAttribute("fill", "#000000");
        }
        Object.entries(attrs).forEach(([key, value]) => path.setAttribute(key, value));
        svg.appendChild(path);
      });
      return svg;
    },
    genrateLoopSvg: function() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("t", "1746700282649");
      svg.setAttribute("class", "icon");
      svg.setAttribute("viewBox", "0 0 1024 1024");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("width", "20");
      svg.setAttribute("height", "20");
      const paths = [
        { d: "M286.95 286.95h450.1v134.61l178.78-178.78L737.05 64v134.61H198.61v269.22h88.34V286.95z m450.1 450.1h-450.1V602.44L108.17 781.22 286.95 960V825.39h538.44V556.17h-88.34v180.88z", "p-id": "3512", fill: "#000000" }
      ];
      paths.forEach((attrs) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        Object.entries(attrs).forEach(([key, value]) => path.setAttribute(key, value));
        svg.appendChild(path);
      });
      return svg;
    },
    genrateNotLoopSvg: function() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("t", "1746700343318");
      svg.setAttribute("class", "icon");
      svg.setAttribute("viewBox", "0 0 1024 1024");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("width", "20");
      svg.setAttribute("height", "20");
      const paths = [
        { d: "M759.14 198.61V64l178.78 178.78-178.78 178.78V286.95H391.06l-90.44-88.34h458.52z m0 357.56h88.34v189.3l-88.34-90.44v-98.86zM86.09 209.13l56.79-56.79 750.87 750.87L836.96 960 702.35 825.39H309.03V960L130.25 781.22l178.78-178.78v134.61H611.9L309.03 434.18v33.65H220.7V343.74L86.09 209.13z", "p-id": "3770", fill: "#000000" }
      ];
      paths.forEach((attrs) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        Object.entries(attrs).forEach(([key, value]) => path.setAttribute(key, value));
        svg.appendChild(path);
      });
      return svg;
    },
    genrateTools: function(parent) {
      const loopElementId = "_loop_" + Math.ceil(Math.random() * 1e8);
      this.getFunctionState();
      const switchTheme = () => {
        let currentTheme = StorageUtil.getValue(StorageUtil.keys.youtube.theme, null);
        if (currentTheme == "light" || !currentTheme) {
          currentTheme = "dark";
        } else {
          currentTheme = "light";
        }
        StorageUtil.setValue(StorageUtil.keys.youtube.theme, currentTheme);
        Theme.setTheme(currentTheme, true);
      };
      const screenshot = () => {
        Screenshot.start();
      };
      const showSettingDialog = () => {
        this.showSettingDialog();
      };
      let videoLoopSate = StorageUtil.getValue(StorageUtil.keys.youtube.videoLoop, false);
      let videoLoopInterval = null;
      const videoLoopEvent = () => {
        if (videoLoopInterval) {
          clearInterval(videoLoopInterval);
          videoLoopInterval = null;
        }
        const videoFull = document.querySelector("#movie_player > div.html5-video-container > video");
        if (videoFull != void 0) {
          videoLoopInterval = setInterval(() => {
            if (videoLoopSate) {
              document.querySelector("#movie_player > div.html5-video-container > video").setAttribute("loop", "true");
            } else {
              document.querySelector("#movie_player > div.html5-video-container > video").removeAttribute("loop");
            }
          }, 1e3);
        }
      };
      const videoLoop = () => {
        const target = document.querySelector("#" + loopElementId);
        let svg = null;
        if (videoLoopSate) {
          videoLoopSate = false;
          svg = this.genrateNotLoopSvg();
        } else {
          videoLoopSate = true;
          svg = this.genrateLoopSvg();
        }
        target.replaceChildren(svg);
        StorageUtil.setValue(StorageUtil.keys.youtube.videoLoop, videoLoopSate);
        videoLoopEvent();
      };
      videoLoopEvent();
      const btns = [
        {
          "tagName": "div",
          "title": "Setting",
          "classname": "toolbox_extension_tool_btn",
          "onclick": showSettingDialog,
          "icon": this.genrateSettingSvg()
        },
        {
          "tagName": "div",
          "title": "Switch the theme",
          "classname": "toolbox_extension_tool_btn",
          "onclick": switchTheme,
          "icon": this.genrateSwitchThemeSvg()
        },
        {
          "tagName": "div",
          "title": "Screenshot",
          "classname": "toolbox_extension_tool_btn",
          "onclick": screenshot,
          "icon": this.genrateScreenshotSvg()
        },
        {
          "tagName": "div",
          "title": "Loop",
          "classname": "toolbox_extension_tool_btn",
          "id": loopElementId,
          "onclick": videoLoop,
          "icon": videoLoopSate ? this.genrateLoopSvg() : this.genrateNotLoopSvg()
        },
      ];
      for (let i = 0; i < btns.length; i++) {
        let item = btns[i];
        const element = document.createElement(item.tagName);
        element.className = item.classname;
        element.setAttribute("title", item.title);
        if (item.hasOwnProperty("icon")) {
          element.appendChild(item.icon);
        }
        if (item.hasOwnProperty("id")) {
          element.id = item.id;
        }
        if (item.hasOwnProperty("onclick")) {
          element.onclick = item.onclick;
        }
        if (item.hasOwnProperty("style")) {
          element.setAttribute("style", item.style);
        }
        parent.appendChild(element);
      }
    },
    genrateBoxContainer: function(button, player) {
      const toolBoxContainer = document.createElement("div");
      toolBoxContainer.id = "toolbox_extension_container";
      toolBoxContainer.className = "toolbox_extension_container";
      const tools = document.createElement("div");
      tools.className = "toolbox_extension_tools";
      this.genrateTools(tools);
      toolBoxContainer.appendChild(tools);
      player.appendChild(toolBoxContainer);
      let isHovering = false;
      button.addEventListener("mouseenter", () => {
        toolBoxContainer.style.display = "block";
        var containerRect = player.getBoundingClientRect();
        var buttonRect = button.getBoundingClientRect();
        var toolBoxContainerRect = toolBoxContainer.getBoundingClientRect();
        var left = buttonRect.left - containerRect.left - toolBoxContainerRect.width / 2 + buttonRect.width / 2;
        var top = buttonRect.top - containerRect.top - toolBoxContainer.clientHeight;
        toolBoxContainer.style.left = `${left}px`;
        toolBoxContainer.style.top = `${top}px`;
      });
      button.addEventListener("mouseleave", () => {
        isHovering = false;
        setTimeout(() => {
          if (!isHovering) {
            toolBoxContainer.style.display = "none";
          }
        }, 100);
      });
      toolBoxContainer.addEventListener("mouseenter", () => {
        isHovering = true;
      });
      toolBoxContainer.addEventListener("mouseleave", () => {
        isHovering = false;
        toolBoxContainer.style.display = "none";
      });
    },
    genrateBox: function() {
      return new Promise((resolve) => {
        const buttonId = "toolBox_extension_codehemu_x";
        const boxContainer = document.createElement("div");
        boxContainer.className = "ytp-button";
        boxContainer.id = buttonId;
        boxContainer.setAttribute("style", `position: relative;display: inline-block;width: 48px;height: 100%;`);
        const boxInner = document.createElement("div");
        boxInner.setAttribute("style", `position: absolute;width: 100%;height: 100%;	`);
        const boxActiveButton = document.createElement("button");
        boxActiveButton.setAttribute("style", `background-color: transparent;width: 100%;height: 100%;outline: none;flex: 1 1 0%;display: flex;-webkit-box-align: center;align-items: center;-webkit-box-pack: center;justify-content: center;border: none;padding: 0px;cursor: pointer;`);
        boxContainer.appendChild(boxInner);
        boxInner.appendChild(boxActiveButton);
        boxActiveButton.appendChild(this.genrateToolSvg());
        const genrateHtml = () => {
          const player = document.querySelector("#player-container-outer .html5-video-player");
          if (player) {
            const rightControls = player.querySelector(".ytp-right-controls");
            if (rightControls) {
              rightControls.prepend(boxContainer);
              this.genrateBoxContainer(boxContainer, player);
            }
          }
        };
        const interval = setInterval(() => {
          if (!document.querySelector("#" + buttonId)) {
            genrateHtml();
          } else {
            resolve();
            clearInterval(interval);
          }
        }, 500);
      });
    },
    showSettingDialog: function() {
      const functionState = StorageUtil.getValue(StorageUtil.keys.youtube.functionState, {
        isOpenCommentTable: true,
        isOpenAutoMiniPlayer: false,
        isOpenThemeProgressBar: true,
        isOpenSpeedControl: true,
        isOpenMarkOrRemoveAd: true,
      });
      const language = LangueUtil.getLanguage();
      const styleSheet = `
			.row-item{
			    background: #ffffff;
			    padding: 15px;
			    border-radius: 10px;
			    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			    transition: background 0.3s;
				margin-bottom: 10px;
			}
			
			.setting {
			    display: flex;
			    justify-content: space-between;
			    align-items: center;
			}
			
			.setting .setting-name{
			    flex: 1;
			    text-align: left;
			    font-size: 14px;
			}
			
			.setting .setting-switch{
			    width: 60px;
			    display: flex;
			    justify-content: end;
			}
			      
			.recomment-item{
			    cursor: pointer;
			}
			.recomment-item:hover{
			    text-decoration: underline;
			}
			.ecomment-item-title{
			    font-size: 15px;
			    margin-bottom: 5px;
			}
			.ecomment-item-content{
			    font-size: 14px;
			}
			
			label {
			    font-size: 16px;
			    font-weight: bold;
			}
			.toggle {
			    width: 50px;
			    height: 25px;
			    background-color: #ccc;
			    border-radius: 15px;
			    position: relative;
			    cursor: pointer;
			    transition: background-color 0.3s;
			    display: inline-block;
			}
			.toggle:before {
			    content: '';
			    position: absolute;
			    width: 20px;
			    height: 20px;
			    background-color: white;
			    border-radius: 50%;
			    top: 50%;
			    left: 3px;
			    transform: translateY(-50%);
			    transition: 0.2s;
			}
			input:checked + .toggle {
			    background-color: #4CAF50;
			}
			input:checked + .toggle:before {
			    transform: translate(24px, -50%);
			}
			input {
			    display: none;
			}
		`;
      const content = `
			<div class="row-item setting">
			  <div class="setting-name" data-i18n="function_is_comment_table_open"></div>
			  <div class="setting-switch">
				<input type="checkbox" id="isCommentTableOpen" /><label class="toggle" for="isCommentTableOpen"></label>
			  </div>
			</div>

      <div class="row-item setting">
        <div class="setting-name" data-i18n="function_is_auto_mini_player_open"></div>
        <div class="setting-switch">
        <input type="checkbox" id="isAutoMiniPlayerOpen" /><label class="toggle" for="isAutoMiniPlayerOpen"></label>
        </div>
      </div>
	
			<div class="row-item setting">
			  <div class="setting-name" data-i18n="function_is_theme_progress_bar_open"></div>
			  <div class="setting-switch">
				<input type="checkbox" id="isThemeProgressBarOpen" /><label class="toggle" for="isThemeProgressBarOpen"></label>
			  </div>
			</div>
		
			<div class="row-item setting">
			  <div class="setting-name" data-i18n="function_is_speed_control_open"></div>
			  <div class="setting-switch">
				<input type="checkbox" id="isSpeedControlOpen" /><label class="toggle"for="isSpeedControlOpen"></label>
			  </div>
			</div>
	
			<div class="row-item setting">
			  <div class="setting-name" data-i18n="function_is_mark_or_remove_ad_open"></div>
			  <div class="setting-switch">
				<input type="checkbox" id="isMarkOrRemoveAdOpen" /><label class="toggle"for="isMarkOrRemoveAdOpen"></label>
			  </div>
			</div>
			
		`;
      Dialog.showMake({
        title: language.content.function_setting_title,
        content,
        styleSheet,
        direction: language.direction,
        onContentReady: function($that) {
          const commentTable = $that.dialogContent.querySelector("#isCommentTableOpen");
          const autoMiniPlayer = $that.dialogContent.querySelector("#isAutoMiniPlayerOpen");
          const themeProgressBar = $that.dialogContent.querySelector("#isThemeProgressBarOpen");
          const speedControl = $that.dialogContent.querySelector("#isSpeedControlOpen");
          const markOrRemoveAd = $that.dialogContent.querySelector("#isMarkOrRemoveAdOpen");
          $that.dialogContent.querySelectorAll(".setting-name").forEach((element) => {
            element.textContent = language.content[element.getAttribute("data-i18n")];
          });
          commentTable.checked = functionState.isOpenCommentTable;
          autoMiniPlayer.checked = functionState.isOpenAutoMiniPlayer;
          themeProgressBar.checked = functionState.isOpenThemeProgressBar;
          speedControl.checked = functionState.isOpenSpeedControl;
          markOrRemoveAd.checked = functionState.isOpenMarkOrRemoveAd;
          commentTable.addEventListener("change", (e) => {
            functionState.isOpenCommentTable = e.target.checked;
            StorageUtil.setValue(StorageUtil.keys.youtube.functionState, functionState);
          });
          autoMiniPlayer.addEventListener("change", (e) => {
            functionState.isOpenAutoMiniPlayer = e.target.checked;
            StorageUtil.setValue(StorageUtil.keys.youtube.functionState, functionState);
          });
          themeProgressBar.addEventListener("change", (e) => {
            functionState.isOpenThemeProgressBar = e.target.checked;
            StorageUtil.setValue(StorageUtil.keys.youtube.functionState, functionState);
          });
          speedControl.addEventListener("change", (e) => {
            functionState.isOpenSpeedControl = e.target.checked;
            StorageUtil.setValue(StorageUtil.keys.youtube.functionState, functionState);
          });
          markOrRemoveAd.addEventListener("change", (e) => {
            functionState.isOpenMarkOrRemoveAd = e.target.checked;
            StorageUtil.setValue(StorageUtil.keys.youtube.functionState, functionState);
          });
        },
        onClose: function() {
          location.reload();
        }
      });
    },
    run: function() {
      return new Promise((resolve) => {
        if (/youtube\.com/.test(window.location.host)) {
          GM_registerMenuCommand("Setting", () => {
            this.showSettingDialog();
          });
          commonUtil.onPageLoad(async () => {
            const theme = StorageUtil.getValue(StorageUtil.keys.youtube.theme, null);
            if (theme) {
              Theme.setTheme(theme, false);
            }
            this.insertStyle();
            await this.genrateBox();
            resolve();
          });
        } else {
          resolve();
        }
      });
    }
  };

  const {
    isOpenCommentTable,
    isOpenAutoMiniPlayer,
    isOpenThemeProgressBar,
    isOpenSpeedControl,
    isOpenMarkOrRemoveAd
  } = StorageUtil.getValue(StorageUtil.keys.youtube.functionState, StorageUtil.getDefaultFunctionState());
  /*!
   * credit to Benjamin Philipp
   * MIT
   * original source: https://greasyfork.org/en/scripts/433051-trusted-types-helper
   */
  const overwrite_default = false;
  const passThroughFunc = function(string, sink) {
    return string;
  };
  var TTPName = "passthrough";
  var TTP_default, TTP = { createHTML: passThroughFunc, createScript: passThroughFunc, createScriptURL: passThroughFunc };
  var needsTrustedHTML = false;
  !window.TTP && (() => {
    try {
      if (typeof window.isSecureContext !== "undefined" && window.isSecureContext) {
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
          needsTrustedHTML = true;
          if (trustedTypes.defaultPolicy) {
            if (overwrite_default) ; else {
              TTP = window.trustedTypes.createPolicy(TTPName, TTP);
            }
            TTP_default = trustedTypes.defaultPolicy;
          } else {
            TTP_default = TTP = window.trustedTypes.createPolicy(
              "default",
              TTP
            );
          }
        }
      }
    } catch (e) {
    } finally {
      window.TTP = TTP;
    }
  })();
  (async () => {
    if (!/youtube\.com/.test(window.location.host)) {
      return;
    }
    if (!isOpenCommentTable) {
      return;
    }
    const communicationKey = `ck-${Date.now()}-${Math.floor(Math.random() * 314159265359 + 314159265359).toString(36)}`;
    const Promise = (async () => {
    })().constructor;
    if (!document.documentElement) {
      await Promise.resolve(0);
      while (!document.documentElement) {
        await new Promise((resolve) => nextBrowserTick(resolve)).then().catch(console.warn);
      }
    }
    const sourceURL = "debug://tabview-youtube/tabview.execution.js";
    const textContent = `(${executionScript})("${communicationKey}", ${JSON.stringify(isOpenAutoMiniPlayer)});${"\n\n"}//# sourceURL=${sourceURL}${"\n"}`;
    GM_addElement(document.head || document.documentElement, "script", { textContent });
    let style = document.createElement("style");
    const sourceURLMainCSS = "debug://tabview-youtube/tabview.main.css";
    style.textContent = `${styles["main"].trim()}${"\n\n"}/*# sourceURL=${sourceURLMainCSS} */${"\n"}`;
    document.documentElement.appendChild(style);
  })();
  (async () => {
    if (isOpenThemeProgressBar) {
      ThemeProgressbar.start();
    }
    await ToolBox.run();
    if (isOpenSpeedControl) {
      await SpeedControl.run();
    }
    if (isOpenMarkOrRemoveAd) {
      MarkOrRemoveAd.run();
    }
  })();

}());
