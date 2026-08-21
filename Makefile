# L'interface de commande unique — neuf cibles, le même nom dans les dix dépôts.
# Le contrat : `masterbrain-doc/docs/delivery/quality-assurance.md` § « L'interface de commande ».
#
# Quatre états, et un seul est un échec :
#   absente  `make -n <cible>` rend 2      la cible n'existe pas dans ce dépôt
#   n-a      déclarée `## <c> — n-a: …`    il n'y a RIEN à exécuter ici, et on dit pourquoi
#   sautée   la recette imprime `SKIP …`   il y a quelque chose, ça tourne AILLEURS, on le nomme
#   échouée  tout le reste                 code non nul
#
# ⚠️ `make` 3.81 : UNE LIGNE DE RECETTE = UN SHELL. Pas de `.ONESHELL` (3.81 l'avale en
# SILENCE), pas de `$(file …)`. Un saut s'écrit `if … then … else … fi`, jamais
# `&& … || echo` — la chaîne confond « l'outil manque » et « l'outil a trouvé quelque chose ».
#
# Les budgets sont DÉCLARÉS : les plafonds du contrat, pas la mesure de la dernière fois.
#
# Une seule app Next sur npm, pas de turbo, pas de workspace. Les cibles délèguent donc aux
# scripts de `package.json` sans filtre ni orchestration.

.PHONY: help check fix lint typecheck test test-integration test-e2e audit

## help — liste les cibles déclarées, leur intention et leur budget · budget 1s
help:
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/^## /  /'

## check — lint + typecheck + test, LECTURE SEULE · budget 90s
check: lint typecheck test

## fix — eslint --fix + prettier --write, corrections SÛRES seulement · budget 20s
fix:
	npm run lint -- --fix
	npm run format

# `format:check` entre ICI et pas dans une cible `format-check` à part : `lint` porte le
# contrôle de format, `fix` porte l'écriture. Un `--check` de formateur laissé hors de la
# porte a fait passer la moitié du gate de `masterbrain-platform` au vert jusqu'au 2026-08-06.
## lint — eslint + prettier --check · budget 20s
lint:
	npm run lint
	npm run format:check

# ⚠️ `type-check` dans `package.json` jusqu'au 2026-08-20. Renommé au SEUL endroit qui le
# déclare : `package-lock.json` porte un PAQUET npm nommé `type-check` (une dépendance
# d'eslint), et un remplacement textuel nu l'aurait mordu.
## typecheck — tsc --noEmit · budget 30s
typecheck:
	npm run typecheck

# ⚠️ C'est une DETTE, pas une propriété du dépôt. Mesuré le 2026-08-20 : `package.json` ne
# déclare AUCUN script de test, et aucun fichier `*.test.*` / `*.spec.*` n'existe hors
# `node_modules`. Ce dépôt est un site Next client en production sans une seule assertion.
# Le cliquet du hub fige ce compte ; il ne l'absout pas. Le jour où un test existe, cette
# cible cesse d'être `n-a` — et le cliquet DESCEND, ce qu'il autorise.
## test — n-a: dette — 0 test dans ce dépôt au 2026-08-20, aucun script de test déclaré · budget 0s
test:
	@echo "n-a test: dette — 0 test dans ce dépôt au 2026-08-20, aucun script de test déclaré"

## test-integration — n-a: aucun conteneur ni base ; ce site lit des fichiers et rend du HTML · budget 0s
test-integration:
	@echo "n-a test-integration: aucun conteneur ni base ; ce site lit des fichiers et rend du HTML"

# Corollaire du `n-a` de `test` : sans aucune suite, il n'y a pas non plus de parcours
# navigateur. C'est la même dette, vue par l'autre bout.
## test-e2e — n-a: dette — aucune suite de test, donc aucun parcours navigateur · budget 0s
test-e2e:
	@echo "n-a test-e2e: dette — aucune suite de test, donc aucun parcours navigateur"

# Un outil manquant n'est PAS un `n-a` : c'est une machine incapable, réparable par un
# `brew install`. On échoue en nommant la commande, on ne rend pas 0.
# ⚠️ `--skip-files .env` : sans lui, le scanner de secrets IMPRIME les valeurs en clair,
# contexte compris — et sa sortie part dans les journaux de CI et les transcripts.
## audit — CVE + secrets (trivy) · budget 120s
audit:
	@if command -v trivy >/dev/null 2>&1; then \
		trivy filesystem --scanners vuln,secret --severity HIGH,CRITICAL \
			--exit-code 1 --quiet --skip-files .env --skip-dirs node_modules --skip-dirs .next . ; \
	else \
		echo "trivy absent — CVE non vérifiées. brew install trivy" >&2; exit 1; \
	fi
