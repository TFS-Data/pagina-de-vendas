# Script para conectar o repositório local ao GitHub
# Execute este script no terminal para realizar o push inicial

Write-Host "Iniciando conexão com o repositório remoto..." -ForegroundColor Cyan

# Adiciona o remote origin
git remote add origin https://github.com/TFS-Data/pagina-de-vendas.git

# Renomeia a branch para main (padrão GitHub)
git branch -M main

# Realiza o push inicial
Write-Host "Realizando o Push para o GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "Sucesso! Seu projeto está agora no GitHub." -ForegroundColor Green
