import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | content-col", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`
      <ContentCol data-test-element @href="http://foo.com" />
    `);
    assert.dom("[data-test-element]").hasAttribute("href", "http://foo.com");

    // Template block usage:
    await render(hbs`
      <ContentCol data-test-element @href="http://foo.com">
        template block text
      </ContentCol>
    `);
    assert.dom("[data-test-element").hasText("template block text");
  });

  test("it has a delay attribute", async function(assert) {
    await render(hbs`
      <ContentCol data-test-element @href="http://foo.com" @delay={{true}} />
    `);
    assert.dom("[data-test-element]").hasClass("content-col--delay");
  });
});
