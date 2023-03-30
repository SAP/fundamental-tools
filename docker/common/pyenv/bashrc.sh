
# pyenv
export PYENV_ROOT="$HOME/.pyenv"
export PYENV_VIRTUALENV_DISABLE_PROMPT=1
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

pyenvUpdatePrompt() {
    [ -z "$PYENV_ORIGINAL_PS1" ] && export PYENV_ORIGINAL_PS1="$PS1"
    VENV_NAME="$(pyenv version-name)"
    export PS1="($VENV_NAME) $PYENV_ORIGINAL_PS1"
}
export PROMPT_COMMAND="$PROMPT_COMMAND pyenvUpdatePrompt;"
