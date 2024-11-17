.PHONY: install
install:
	@echo "🔧 Installing dependencies"
	@npm install
	@npx playwright install chromium

.PHONY: test-generic
test-generic:
	@echo "🧪 $(suite) tests"
	@npx playwright test --project=$(suite)

.PHONY: test-unit
test-unit:
	@npx playwright test --project=unit

.PHONY: test-e2e
test-e2e:
	@npx playwright test --project=e2e
