# watch mode

    Для того чтобы каждый раз не компилировать файл вручную, мы можем использовать команду
    tsc fileName --watch or tsc fileName -w
    Теперь каждый раз, когда мы будем изменять файл, он будет автоматически компилироваться
    учитывая внесённые изменения.

    tsc --init - создаёт файл tsconfig.json
    Теперь мы можем использовать команду tsc без указания имени файла.
    И TS скомпилирует все файлы c .ts расширением.
    Аналогично прошлому примеру, мы можем запустить команду tsc -w
    и теперь TS будет следить за всеми файлами и автоматически компелировать их, когда
    в них произойдет изменение.

## Config
