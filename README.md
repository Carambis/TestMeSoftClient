# TestMeSoftClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Соответсвие страниц

Формат: что делает - пакет

gui

1. грамматические ошибки в тексте наполнения страницы (грамиаеические):
src/app/task/grammar

2. разные шрифты на странице (фонт, размер) 
src/app/task/font

3. несоответствие хинта назначению формы (например: в форме авторизации хинт о том, что нет ни одного товара в корзине для отправки формы):
src/app/task/hint

4. выравнивание названий полей разное, не привязано к одной стороне - левой:
src/app/task/alignment

5. расположение вводимого текста внутри поля (начинаю писать много букв - выходит за поле ввода):
src/app/task/location

6. изменение курсора при наведении на радиобаттон:
src/app/task/cursor

7. изменение чекбокса при наведении курсора:
src/app/task/checkbox

8. подсветка при выборе несколький значений из списка:
src/app/task/illumination

9. изменение вида ссылки и курсора при наведении в меню:
src/app/task/link

func

1. кнопка не выполняет назначение, которое написано на ней:
src/app/task/button-function

2. проверка не срабатывает для поля загрузки файла (пример - можно только jpeg, попытаемся загрузить что-нибудь еще):
src/app/task/file-type-check

3. можно выбрать больше, чем один радиобаттон в форме:
src/app/task/radiobutton-check

4. нельзя выбрать больше, чем один чекбокс в форме:
src/app/task/checkbox-check

5. нельзя снять чекбокс\радиобаттон:
src/app/task/uncheck-param

6. не осуществляется переход по ссылке из меню:
src/app/task/link-work

7. не работают сортировки в таблице:
src/app/task/sort-problem

8. кнопка срабатывает только при двойном нажатии:
src/app/task/button-double-click

9. введенные в форму данные сбрасываются, если были заполнены не все обязательные поля:
src/app/task/form-problem

10. в календаре можно выбрать дату рождения больше, чем сегодняшнй день:
src/app/task/calendar

11. фильтры на странице не срабатывают или фильтруют не по заданым параметрам, или фильтруют, если не было задано никаких:
src/app/task/filter
