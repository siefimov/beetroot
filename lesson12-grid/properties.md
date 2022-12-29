# Grid properties

[grid properties]"https://react.school/grid/"

## parent

grid-template-columns
grid-template-rows
grid-template

justify-content: alignment columns
align-content: alignment rows

justify-items: aligns grid items within their _tracks_ **horizontaly** (not the entire container)
align-items: aligns grid items within their _tracks_ **verticaly**

place-items
place-content

grid-row-gap
grid-column-gap
grid-gap

grid-auto-flow
grid-auto-columns
grid-auto-rows

grid-template-areas

## children

justify-self: aligns one grid item
align-self

place-self
grid-column: 1 / span 3
grid-column-start
grid-column-end
grid-row
grid-row-start
grid-row-end
grid-area

<!-- -=-=-=-=- -->

**респонсивні колонки**
`.container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(2, 1fr); // респонсивні колонки
    grid-template-rows: repeat(2, 40px);
  }`

за такого варіанту колонки більше ніж за 100px не збільшуються, але можуть _зменшуватися_
`.container {
    display: grid;
    grid-gap: 5px;
    **grid-template-columns: repeat(6, 100px);**
    grid-template-rows: repeat(2, 100px);
}`

якщо замість 100рх поставити **1fr**, то колонки будуть як **розширюватися**, так і **звужуватися** під час зміни розміру екрану

однак, у них завжди буде 6 колонок. це не завжди зручно
тому змість 6 (repeat(6, 100px)) крае записати **auto-fit**

а ще краще замість 100рх записати **minmax(100px, 1fr)**
`grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));`

## implicit rows (неявні рядки)

_grid-auto-rows_
`grid-auto-rows: 100px;`

тоді _grid-template-rows_ не потрібен

<!-- -=-=-=-=-= -->

## термінологія

**CSS Grid Layout** — це найпотужніший інструмент для створення розмітки, який наразі доступний в CSS. Це двовимірна система, що може містити рядки і стовпці (на відміну від модуля Flexbox, який загалом є одновимірної системою). Призначення Grid Layout — повністю змінити спосіб проєктування користувацьких інтерфейсів, дизайн яких заснований на сітці.

_Grid-контейнер_ (англ. Grid container) — це елемент, якому задано властивість display: grid. Він є безпосереднім батьком всіх grid-елементів.

_Grid-елементи_ (англ. Grid items) — прямі нащадки grid-контейнера. Важливо: нащадки grid-елементів вже не є нащадками grid-контейнера.

_Grid-лінії_ (англ. Grid lines) — це роздільні лінії, які складають структуру сітки. Лінії можуть бути горизонтальними і вертикальними (grid-лінії рядків і grid-лінії стовпців) і розташовуватися по обидві сторони від рядка або стовпця.

_Grid-шлях_ (англ. Grid track) — простір між двома сусідніми grid-лініями. Можна його їх як рядки і стовпці сітки.

_Grid-чарунка_ (англ. Grid cell) — простір між двома сусідніми горизонтальними і двома сусідніми вертикальними grid-лініями.

_Grid-область_ (англ. Grid area) — це простір, оточений чотирма grid-лініями. Grid-область може складатися з будь-якої кількості grid-чарунок.
