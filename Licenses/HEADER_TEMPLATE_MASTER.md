# 🛡️ Opsyx Technologies — Master File Header Template

This document provides standardized Opsyx proprietary headers for all supported languages, plus instructions on how to integrate them into your projects.

SPDX Identifier: Proprietary-Opsyx  
Contact: info@opsyxtechnologies.com  

© 2026 Opsyx Technologies LLC — All rights reserved.  
Veteran-Owned | Cybersecurity-Driven | Mission Assured  

--------------------------------------------------------------------------------
✅ HOW TO USE THIS MASTER SHEET
--------------------------------------------------------------------------------
1. Keep LICENSE.md in the repository root (full terms).
2. For each new file, copy the correct header block below and paste it at the very top.
3. For existing files, prepend the header (see integration examples).
4. Always keep `SPDX-License-Identifier: Proprietary-Opsyx` intact.
5. Optionally add a NOTICE file in the root:

   This repository is licensed under the Proprietary-Opsyx License.  
   See LICENSE.md for full terms and conditions.  
   © 2026 Opsyx Technologies LLC — All rights reserved.  

--------------------------------------------------------------------------------
🐍 PYTHON (.py)
--------------------------------------------------------------------------------
Header:
# ===================================================================================================
# 🛡️ Opsyx Technologies – Proprietary Software
# SPDX-License-Identifier: Proprietary-Opsyx
# Copyright (c) 2026 Opsyx Technologies LLC
# All rights reserved.
# ===================================================================================================
# 🔒 Usage: Internal education & training only. No redistribution/modification/reverse engineering/
#           or commercial use without written consent. See LICENSE.md for full terms.
# ⚠️  Warranty: Provided "AS IS" without warranties of merchantability, fitness, or non-infringement.
# 📫 Contact: info@opsyxtechnologies.com
# ===================================================================================================

Integration Examples:
- Manual: paste at top of file.
- Unix CLI: { printf '%s\n' '# SPDX-License-Identifier: Proprietary-Opsyx' ''; cat file.py; } > tmp && mv tmp file.py
- PowerShell: $h = "# SPDX-License-Identifier: Proprietary-Opsyx`r`n`r`n"; (Get-Content file.py) | Set-Content file.py.bak; $h + (Get-Content file.py.bak -Raw) | Set-Content file.py

--------------------------------------------------------------------------------
🐚 BASH / SHELL (.sh)
--------------------------------------------------------------------------------
Header:
# ===================================================================================================
# 🛡️ Opsyx Technologies – Proprietary Software
# SPDX-License-Identifier: Proprietary-Opsyx
# Copyright (c) 2026 Opsyx Technologies LLC
# All rights reserved.
# ===================================================================================================
# 🔒 Usage: Internal education & training only. No redistribution/modification/reverse engineering/
#           or commercial use without written consent. See LICENSE.md for full terms.
# ⚠️  Warranty: Provided "AS IS" without warranties of merchantability, fitness, or non-infringement.
# 📫 Contact: info@opsyxtechnologies.com
# ===================================================================================================

Integration Example (with shebang):
{ head -n 1 script.sh | grep -q '^#!' && { read -r shebang; printf '%s\n' "$shebang"; cat <<'HEADER'
# SPDX-License-Identifier: Proprietary-Opsyx
HEADER
cat; } < script.sh > tmp && mv tmp script.sh; }

--------------------------------------------------------------------------------
🧰 POWERSHELL (.ps1)
--------------------------------------------------------------------------------
Header:
# ===================================================================================================
# 🛡️ Opsyx Technologies – Proprietary Software
# SPDX-License-Identifier: Proprietary-Opsyx
# Copyright (c) 2026 Opsyx Technologies LLC
# All rights reserved.
# ===================================================================================================
# 🔒 Usage: Internal education & training only. No redistribution/modification/reverse engineering/
#           or commercial use without written consent. See LICENSE.md for full terms.
# ⚠️  Warranty: Provided "AS IS" without warranties of merchantability, fitness, or non-infringement.
# 📫 Contact: info@opsyxtechnologies.com
# ===================================================================================================

Integration Example:
$header = @" 
# SPDX-License-Identifier: Proprietary-Opsyx
"@
$orig = Get-Content .\script.ps1 -Raw
$header + "`r`n" + $orig | Set-Content .\script.ps1

--------------------------------------------------------------------------------
🧱 C / C++ / JAVA (.c .cpp .h .java)
--------------------------------------------------------------------------------
Header:
/* ================================================================================================
 * 🛡️ Opsyx Technologies – Proprietary Software
 * SPDX-License-Identifier: Proprietary-Opsyx
 * Copyright (c) 2026 Opsyx Technologies LLC
 * All rights reserved.
 * ================================================================================================
 * 🔒 Usage: Internal education & training only. No redistribution/modification/reverse engineering/
 *           or commercial use without written consent. See LICENSE.md for full terms.
 * ⚠️  Warranty: Provided "AS IS" without warranties of merchantability, fitness, or non-infringement.
 * 📫 Contact: info@opsyxtechnologies.com
 * ================================================================================================ */

Integration Example:
HEADER='/* SPDX-License-Identifier: Proprietary-Opsyx */'
printf "%s\n\n" "$HEADER" | cat - file.c > tmp && mv tmp file.c

--------------------------------------------------------------------------------
🌐 HTML / CSS / JAVASCRIPT / TYPESCRIPT (.html .css .js .ts)
--------------------------------------------------------------------------------
Header:
<!-- ==============================================================================================
 🛡️ Opsyx Technologies – Proprietary Software
 SPDX-License-Identifier: Proprietary-Opsyx
 Copyright (c) 2026 Opsyx Technologies LLC
 All rights reserved.
 ==============================================================================================
 🔒 Usage: Internal education & training only. No redistribution/modification/reverse engineering/
           or commercial use without written consent. See LICENSE.md for full terms.
 ⚠️  Warranty: Provided "AS IS" without warranties of merchantability, fitness, or non-infringement.
 📫 Contact: info@opsyxtechnologies.com
 ============================================================================================== -->

JS/TS Minimal Alternative:
// SPDX-License-Identifier: Proprietary-Opsyx
// © 2026 Opsyx Technologies LLC — All rights reserved. See LICENSE.md for full terms.

--------------------------------------------------------------------------------
📝 MARKDOWN / CONFIG (.md .yml .yaml .conf .ini)
--------------------------------------------------------------------------------
Header:
<!-- ==============================================================================================
 🛡️ Opsyx Technologies – Proprietary Software
 SPDX-License-Identifier: Proprietary-Opsyx
 Copyright (c) 2026 Opsyx Technologies LLC
 All rights reserved.
 ==============================================================================================
 🔒 Usage: Internal education & training only. No redistribution/modification/reverse engineering/
           or commercial use without written consent. See LICENSE.md for full terms.
 ⚠️  Warranty: Provided "AS IS" without warranties of merchantability, fitness, or non-infringement.
 📫 Contact: info@opsyxtechnologies.com
 ============================================================================================== -->

YAML Minimal:
# SPDX-License-Identifier: Proprietary-Opsyx

--------------------------------------------------------------------------------
⚡ MINIMAL HEADER (ALL LANGUAGES)
--------------------------------------------------------------------------------
# SPDX-License-Identifier: Proprietary-Opsyx
# © 2026 Opsyx Technologies LLC — All rights reserved. See LICENSE.md. Contact: info@opsyxtechnologies.com

--------------------------------------------------------------------------------
🔧 OPTIONAL: GIT PRE-COMMIT HOOK
--------------------------------------------------------------------------------
To enforce headers automatically, create `.git/hooks/pre-commit` (Unix) and make it executable:

#!/usr/bin/env bash
fail=0
for f in $(git diff --cached --name-only --diff-filter=ACMR | grep -E '\.(py|sh|ps1|c|cpp|h|java|js|ts|css|html|md|yml|yaml|conf|ini)$'); do
  if ! grep -q 'SPDX-License-Identifier: Proprietary-Opsyx' "$f"; then
    echo "✗ Missing SPDX header in $f"
    fail=1
  fi
done
[ $fail -eq 0 ] || { echo "Commit blocked: add SPDX header."; exit 1; }

--------------------------------------------------------------------------------
📖 SUMMARY
--------------------------------------------------------------------------------
- LICENSE.md = full license text
- SPDX line = short pointer in every file
- Headers above = full legal + branding template
- NOTICE (optional) = lightweight pointer to LICENSE
