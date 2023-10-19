## 🤬 Errors

> **ERR001**: Execution_Policies

```error
pnpm : File C:\Program Files\nodejs\pnpm.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
```

_Solution_ :

This could be due to the current user having an undefined ExecutionPolicy.
In **PowerShell** as _Administrator_

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

> **ERRxxx**: Error_title
