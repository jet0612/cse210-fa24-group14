.PHONY: install
install:
	@echo "🔧 Installing dependencies"
	@npm install
	@npx playwright install chromium

.PHONY: test-code-quality
test-code-quality:
	@echo "🧪 Checking code quality"
	@npx eslint

.PHONY: test-generic
test-generic:
	@echo "🧪 $(suite) tests"
	@npx playwright test --project=$(suite)

.PHONY: test-unit
test-unit:
	@$(MAKE) test-generic suite=unit

.PHONY: test-e2e
test-e2e:
	@$(MAKE) test-generic suite=e2e
