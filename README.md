Descrição do problema:

> Resolva um problema com um único valor
> "asdfzxascvdfnozebranetworkpoasoidfuizxdfzxascvdcvdcvdasdnznznzasdf", ache a
> maior palavra (qualquer sequencia de duas já é considerado uma), retorna uma
> lista de todas sem repetições e decrescente. Escreve pelo menos 3 testes em da
> sua feature, não precisa usar nenhuma suite (teste Runner como jest) só
> garanta que o resultado as possibilidades.
>
> Envie a solução em um link compartilhado no github com o usuário jhserodio,
> (pode ser privado), necessário commits em 3 momentos seguindo a metodologia
> TDD com mensagens no padrão conventional Commits.


Dada essa descrição bastante ambígua, minhas premissas são:

- uma *palavra* é uma sequência de 2 ou mais letras;
- o resultado esperado é uma lista de sub`string`s da entrada.

Isso sendo verdade, a maior `string` sempre vai ser a entrada inteira: vai ser
sempre a maior e sem repeticão.
