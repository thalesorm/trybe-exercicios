# Exercícios - permissões

-   Crie a pasta  `unix_tests_permissions`  e navegue até ela.
    
-   Rode o comando  [`ls -l`](https://linux.die.net/man/1/ls)  e veja quais as permissões dos arquivos.
    
-   Crie o arquivo  `arquivo_teste.txt`.
    
-   Mude a permissão do arquivo  `arquivo_teste.txt`  para que todas as pessoas usuárias possam ter acesso à leitura e escrita, e verifique se está correto com o comando  `ls -l`;
    
    > Resultado esperado:  `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt`
    
-   Tire a permissão de escrita do arquivo  `arquivo_teste.txt`  para todas as pessoas usuárias, verifique se está correto com o comando  `ls -l`;
    
    > Resultado esperado:  `-r--r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt`
    
-   Volte à permissão do arquivo  `arquivo_teste.txt`  para a listada inicialmente utilizando o comando  `chmod 644 arquivo_teste.txt`.
    
<<<<<<< HEAD
    > Resultado esperado:  `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt`
=======
    > Resultado esperado:  `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt`
>>>>>>> 71609dd1c846c3ef9684d314127fa1227a9f9f65
