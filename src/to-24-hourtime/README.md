# Задание

Преобразование 12-часового формата времени, такого как “8:30 am” или “8:30 pm”, в 24-часовой формат (например, “0830” или “2030”) звучит достаточно просто, не так ли? Ну что ж, давай посмотрим, сможешь ли ты это сделать!

Тебе нужно будет определить функцию, которая будет принимать час (всегда в диапазоне от 1 до 12 включительно), минуту (всегда в диапазоне от 0 до 59 включительно) и период (либо “a.m.”, либо “p.m.”) в качестве входных данных.

Твоя задача — вернуть строку из четырёх цифр, которая кодирует это время в 24-часовом формате.

Примечания:

    •	По соглашению, полдень — это 12:00 pm, а полночь — 12:00 am.
    •	В 12-часовом формате не существует 0-го часа, и время сразу после полуночи обозначается, например, как 12:15 am. В 24-часовом формате это переводится как 00:15.
