"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_search = "#0000FF";

Blockly.Blocks["sprego_index"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_index");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("ARRAY");
		this.appendValueInput("ROW");
		this.appendValueInput("COLUMN");
		this.setTooltip(locale.help);
		this.setColour(color_search);
	}
};

Blockly.Blocks["sprego_match"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_match");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("VALUE");
		this.appendValueInput("ARRAY");
		this.appendValueInput("TYPE");
		this.setTooltip(locale.help);
		this.setColour(color_search);
	}
};

Blockly.Blocks["sprego_row/column"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_row/column");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(color_search);
	}
};

Blockly.Blocks["sprego_offset"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_offset");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("INDEX");
		this.appendValueInput("ROWS");
		this.appendValueInput("COLUMNS");
		this.appendValueInput("HEIGHT");
		this.appendValueInput("WIDTH");
		this.setTooltip(locale.help);
		this.setColour(color_search);
	}
};

Blockly.Blocks["sprego_transpose"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_transpose");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("ARRAY");
		this.setTooltip(locale.help);
		this.setColour(color_search);
	}
};