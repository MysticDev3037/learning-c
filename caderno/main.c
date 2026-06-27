#include <stdio.h>
#include <time.h>
    
void registrarConteudo(void);
void verRegistros(void);

int main() {
    int opcao;
    while (1) {
        printf("\n=== CADERNO DE ESTUDOS ===\n");
        printf("1 - Criar nota\n");
        printf("2 - Ver notas\n");
        printf("0 - Sair\n");
        printf("Escolha: ");
        scanf("%d", &opcao);
        while(getchar() != '\n');
        if (opcao == 1) {
            registrarConteudo();
        }
        else if (opcao == 2) {
            verRegistros();
        }
        else if (opcao == 0) {
            printf("Saindo...\n");
            break;
        }
        else {
            printf("Opcao invalida!\n");
        }
    }

    return 0;
}
void registrarConteudo() {
    FILE *arquivo = fopen("notas.txt", "a");

    if (arquivo == NULL) {
        printf("Erro ao abrir arquivo!\n");
        return;
    }
    char materia[200];
    char titulo[70];
    char conteudo[200];
    printf("Digite a matéria: ");
    getchar();
    fgets(materia, 200, stdin);
    printf("Digite o título: ");
    fgets(titulo, 70, stdin);
    printf("Digite o conteúdo: ");
    fgets(conteudo, 200, stdin);
    fprintf(arquivo, "Matéria: %s\nTítulo: %s\nConteúdo: %s\n", materia, titulo, conteudo);
    fclose(arquivo);
    printf("Nota salva!\n");
}
void verRegistros() {
    FILE *arquivo = fopen("notas.txt", "r");
    if (arquivo == NULL) {
        printf("Nenhuma nota encontrada.\n");
        return;
    }
    char linha[200];
    printf("\n=== SUAS NOTAS ===\n");
    while (fgets(linha, 200, arquivo) != NULL) {
        printf("%s", linha);
    }
    fclose(arquivo);
}