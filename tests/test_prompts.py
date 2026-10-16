import unittest

from app import build_prompt


class BuildPromptTests(unittest.TestCase):
    def test_prompt_includes_role_task_and_brief(self):
        prompt = build_prompt(
            "cto",
            "plan",
            "Build a reliable analytics dashboard for small retailers.",
        )
        self.assertIn("CTO", prompt)
        self.assertIn("actionable project plan", prompt)
        self.assertIn("small retailers", prompt)

    def test_invalid_role_is_rejected(self):
        with self.assertRaises(ValueError):
            build_prompt("unknown", "plan", "A sufficiently detailed project brief.")

    def test_invalid_outcome_is_rejected(self):
        with self.assertRaises(ValueError):
            build_prompt("cto", "unknown", "A sufficiently detailed project brief.")


if __name__ == "__main__":
    unittest.main()
